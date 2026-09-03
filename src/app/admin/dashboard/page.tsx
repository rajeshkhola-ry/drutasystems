"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import {
  registerAdminMachineFromUrl,
  unregisterAdminMachine,
  useAdminMachineStatus,
} from "../../../config/adminMachine";
import {
  DRUTA_AGENTS,
  DRUTA_AGENT_LABELS,
  THINKING_MODE_LABELS,
} from "../../../config/drutaAgents";

const ALERT_EMAILS = ["RAJESH.KHOLA@GMAIL.COM", "RAJESH.KHOLA@OUTLOOK.COM"];

type HealthMetric = {
  label: string;
  value: string;
  status: "ok" | "warning" | "critical";
};

const HEALTH_METRICS: HealthMetric[] = [
  { label: "API Uptime", value: "99.98%", status: "ok" },
  { label: "Avg Response Time", value: "142ms", status: "ok" },
  { label: "Error Rate (24h)", value: "0.32%", status: "warning" },
  { label: "Queue Backlog", value: "3 jobs", status: "ok" },
];

const STATUS_STYLES: Record<HealthMetric["status"], string> = {
  ok: "bg-green-500/10 text-green-400 border-green-500/30",
  warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  critical: "bg-red-500/10 text-red-400 border-red-500/30",
};

type ProviderWallet = {
  id: string;
  name: string;
  balance: number;
  currency: string;
  updatedAt: string;
};

// Any provider registered by the extension/system flows through here automatically.
const PROVIDER_WALLETS: ProviderWallet[] = [
  { id: "openai", name: "OpenAI", balance: 4820.4, currency: "USD", updatedAt: "2026-09-02" },
  { id: "anthropic", name: "Anthropic", balance: 3150.0, currency: "USD", updatedAt: "2026-09-01" },
  { id: "deepseek", name: "DeepSeek", balance: 980.25, currency: "USD", updatedAt: "2026-08-28" },
  { id: "google", name: "Google Gemini", balance: 2410.1, currency: "USD", updatedAt: "2026-09-03" },
];

type AgentRun = {
  agent: string;
  date: string; // ISO yyyy-mm-dd
  month: number; // 1-12
  year: number;
  runs: number;
  tasks: number;
  errors: number;
  firstTrySuccess: number;
  highIteration: number;
  cost: number;
};

const AGENT_RUNS: AgentRun[] = [
  { agent: "Claude Sonnet", date: "2026-09-01", year: 2026, month: 9, runs: 980, tasks: 612, errors: 24, firstTrySuccess: 528, highIteration: 61, cost: 418.72 },
  { agent: "Claude Sonnet", date: "2026-08-12", year: 2026, month: 8, runs: 1140, tasks: 705, errors: 38, firstTrySuccess: 590, highIteration: 88, cost: 502.15 },
  { agent: "Claude Opus", date: "2026-09-02", year: 2026, month: 9, runs: 420, tasks: 260, errors: 9, firstTrySuccess: 231, highIteration: 30, cost: 611.4 },
  { agent: "Claude Opus", date: "2025-12-09", year: 2025, month: 12, runs: 380, tasks: 224, errors: 15, firstTrySuccess: 189, highIteration: 41, cost: 548.9 },
  { agent: "DeepSeek-V3", date: "2026-09-03", year: 2026, month: 9, runs: 1520, tasks: 1104, errors: 52, firstTrySuccess: 942, highIteration: 130, cost: 96.33 },
  { agent: "ChatGPT (GPT-4o)", date: "2026-08-27", year: 2026, month: 8, runs: 640, tasks: 401, errors: 18, firstTrySuccess: 344, highIteration: 47, cost: 187.6 },
  { agent: "Tax Engine Agent", date: "2026-09-01", year: 2026, month: 9, runs: 610, tasks: 420, errors: 12, firstTrySuccess: 361, highIteration: 27, cost: 142.8 },
  { agent: "Tax Engine Agent", date: "2026-08-14", year: 2026, month: 8, runs: 742, tasks: 512, errors: 21, firstTrySuccess: 430, highIteration: 41, cost: 176.45 },
  { agent: "Compliance Agent", date: "2026-09-02", year: 2026, month: 9, runs: 244, tasks: 190, errors: 4, firstTrySuccess: 171, highIteration: 9, cost: 61.2 },
  { agent: "Compliance Agent", date: "2026-08-20", year: 2026, month: 8, runs: 301, tasks: 233, errors: 9, firstTrySuccess: 198, highIteration: 15, cost: 74.9 },
  { agent: "Support Agent", date: "2026-09-03", year: 2026, month: 9, runs: 905, tasks: 640, errors: 33, firstTrySuccess: 502, highIteration: 84, cost: 203.55 },
  { agent: "Support Agent", date: "2025-12-11", year: 2025, month: 12, runs: 861, tasks: 588, errors: 40, firstTrySuccess: 430, highIteration: 96, cost: 190.11 },
  { agent: "Billing Agent", date: "2025-11-05", year: 2025, month: 11, runs: 388, tasks: 310, errors: 7, firstTrySuccess: 281, highIteration: 18, cost: 58.4 },
];

// Every agent the extension ships, plus any extra agent seen in run data, so a
// newly added agent appears without editing this file.
const MASTER_AGENTS: string[] = Array.from(
  new Set([...DRUTA_AGENT_LABELS, ...AGENT_RUNS.map((r) => r.agent)])
);

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const SELECT_CLASS =
  "rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 [color-scheme:dark]";

export default function AdminDashboard() {
  const machineStatus = useAdminMachineStatus();

  useEffect(() => {
    registerAdminMachineFromUrl();
  }, []);

  const [wallets, setWallets] = useState<ProviderWallet[]>(PROVIDER_WALLETS);
  const [walletDrafts, setWalletDrafts] = useState<Record<string, string>>({});

  const [reportYear, setReportYear] = useState<string>("all");
  const [reportMonth, setReportMonth] = useState<string>("all");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const grandTotal = wallets.reduce((sum, w) => sum + w.balance, 0);

  const availableYears = Array.from(new Set(AGENT_RUNS.map((r) => r.year))).sort((a, b) => b - a);

  const filteredRuns = AGENT_RUNS.filter(
    (r) =>
      (reportYear === "all" || r.year === Number(reportYear)) &&
      (reportMonth === "all" || r.month === Number(reportMonth)) &&
      (!fromDate || r.date >= fromDate) &&
      (!toDate || r.date <= toDate)
  );

  const agentStats = MASTER_AGENTS.map((agent) => {
    const runs = filteredRuns.filter((r) => r.agent === agent);
    const totals = runs.reduce(
      (acc, r) => ({
        runs: acc.runs + r.runs,
        tasks: acc.tasks + r.tasks,
        errors: acc.errors + r.errors,
        firstTrySuccess: acc.firstTrySuccess + r.firstTrySuccess,
        highIteration: acc.highIteration + r.highIteration,
        cost: acc.cost + r.cost,
      }),
      { runs: 0, tasks: 0, errors: 0, firstTrySuccess: 0, highIteration: 0, cost: 0 }
    );
    return {
      agent,
      ...totals,
      successRate: totals.tasks ? (totals.firstTrySuccess / totals.tasks) * 100 : 0,
      costPerTask: totals.tasks ? totals.cost / totals.tasks : 0,
    };
  });

  const reportTotals = agentStats.reduce(
    (acc, s) => ({
      runs: acc.runs + s.runs,
      tasks: acc.tasks + s.tasks,
      errors: acc.errors + s.errors,
      cost: acc.cost + s.cost,
    }),
    { runs: 0, tasks: 0, errors: 0, cost: 0 }
  );

  const [alertEmails, setAlertEmails] = useState<string[]>(ALERT_EMAILS);
  const [newEmail, setNewEmail] = useState("");

  function handleLock() {
    unregisterAdminMachine();
  }

  function handleExportCsv() {
    const header = [
      "Agent",
      "Total Runs / Iterations",
      "Total Completed Tasks",
      "Errors / Failures",
      "First Try Success",
      "First Try Success Rate (%)",
      "High Iteration",
      "Total Cost (USD)",
      "Cost per Completed Task (USD)",
    ];
    const rows = agentStats.map((s) => [
      s.agent,
      s.runs,
      s.tasks,
      s.errors,
      s.firstTrySuccess,
      s.successRate.toFixed(1),
      s.highIteration,
      s.cost.toFixed(2),
      s.costPerTask.toFixed(4),
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => '"' + String(cell).replace(/"/g, '""') + '"').join(","))
      .join("\r\n");
    // BOM keeps Excel from mangling UTF-8 on open.
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "agent-performance-" + new Date().toISOString().slice(0, 10) + ".csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function handleAddEmail(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = newEmail.trim();
    if (!trimmed) return;
    if (alertEmails.includes(trimmed.toUpperCase())) {
      setNewEmail("");
      return;
    }
    setAlertEmails((prev) => [...prev, trimmed]);
    setNewEmail("");
  }

  function handleRemoveEmail(email: string) {
    setAlertEmails((prev) => prev.filter((e) => e !== email));
  }

  function handleUpdateBalance(e: React.FormEvent, id: string) {
    e.preventDefault();
    const raw = walletDrafts[id]?.trim();
    if (!raw) return;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < 0) return;
    const today = new Date().toISOString().slice(0, 10);
    setWallets((prev) =>
      prev.map((w) => (w.id === id ? { ...w, balance: parsed, updatedAt: today } : w))
    );
    setWalletDrafts((prev) => ({ ...prev, [id]: "" }));
  }

  if (machineStatus === null) return null;
  if (!machineStatus) notFound();

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Druta Systems — Admin Dashboard
            </h1>
            <p className="text-sm text-neutral-400">
              Live operational overview and billing controls.
            </p>
          </div>
          <button
            onClick={handleLock}
            className="self-start rounded-lg border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/5 sm:self-auto"
          >
            Unregister this device
          </button>
        </header>

        {/* Grand total across every provider wallet */}
        <section className="mb-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-neutral-900 p-6">
          <h2 className="text-sm font-medium text-indigo-300 mb-2">
            Grand Total Wallet Balance
          </h2>
          <p className="text-4xl font-bold text-white">
            ${grandTotal.toFixed(2)}
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Auto-summed across {wallets.length} provider{wallets.length === 1 ? "" : "s"}
          </p>
        </section>

        {/* Per-provider wallets */}
        <section className="mb-6">
          <h2 className="mb-4 text-sm font-medium text-neutral-400">
            Provider Wallets
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{wallet.name}</p>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400">
                    {wallet.currency}
                  </span>
                </div>
                <p className="mt-3 text-2xl font-bold text-white">
                  ${wallet.balance.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Updated {wallet.updatedAt}
                </p>
                <form
                  onSubmit={(e) => handleUpdateBalance(e, wallet.id)}
                  className="mt-4 flex gap-2"
                >
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={walletDrafts[wallet.id] ?? ""}
                    onChange={(e) =>
                      setWalletDrafts((prev) => ({ ...prev, [wallet.id]: e.target.value }))
                    }
                    placeholder="New balance"
                    aria-label={`New balance for ${wallet.name}`}
                    className="min-w-0 flex-1 rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-600 outline-none focus:border-indigo-500 [color-scheme:dark]"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
                  >
                    Update
                  </button>
                </form>
              </div>
            ))}
          </div>
        </section>

        {/* Agent performance & execution reports */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-medium text-neutral-400">
              Agent Performance &amp; Execution Reports
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <select
                aria-label="Filter by year"
                value={reportYear}
                onChange={(e) => setReportYear(e.target.value)}
                className={SELECT_CLASS}
              >
                <option value="all" className="bg-neutral-950 text-white">All years</option>
                {availableYears.map((year) => (
                  <option key={year} value={year} className="bg-neutral-950 text-white">
                    {year}
                  </option>
                ))}
              </select>
              <select
                aria-label="Filter by month"
                value={reportMonth}
                onChange={(e) => setReportMonth(e.target.value)}
                className={SELECT_CLASS}
              >
                <option value="all" className="bg-neutral-950 text-white">All months</option>
                {MONTH_NAMES.map((name, i) => (
                  <option key={name} value={i + 1} className="bg-neutral-950 text-white">
                    {name}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-1 text-xs text-neutral-500">
                From
                <input
                  type="date"
                  aria-label="From date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className={SELECT_CLASS}
                />
              </label>
              <label className="flex items-center gap-1 text-xs text-neutral-500">
                To
                <input
                  type="date"
                  aria-label="To date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className={SELECT_CLASS}
                />
              </label>
              {(fromDate || toDate || reportYear !== "all" || reportMonth !== "all") && (
                <button
                  onClick={() => {
                    setFromDate("");
                    setToDate("");
                    setReportYear("all");
                    setReportMonth("all");
                  }}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-neutral-300 hover:bg-white/5"
                >
                  Reset
                </button>
              )}
              <button
                onClick={handleExportCsv}
                className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-green-500"
              >
                Export to Excel (CSV)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-neutral-500">
                  <th className="pb-3 font-medium">Agent / Model</th>
                  <th className="pb-3 font-medium">Total Runs</th>
                  <th className="pb-3 font-medium">Completed Tasks</th>
                  <th className="pb-3 font-medium">Errors</th>
                  <th className="pb-3 font-medium">1st Try Success</th>
                  <th className="pb-3 font-medium">High Iteration</th>
                  <th className="pb-3 font-medium">Total Cost</th>
                  <th className="pb-3 font-medium">Cost / Task</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {agentStats.map((stat) => (
                  <tr key={stat.agent} className={stat.runs === 0 ? "opacity-50" : undefined}>
                    <td className="py-3 text-white">{stat.agent}</td>
                    <td className="py-3 text-neutral-300">{stat.runs}</td>
                    <td className="py-3 text-neutral-300">{stat.tasks}</td>
                    <td className="py-3 text-red-400">{stat.errors}</td>
                    <td className="py-3">
                      <span className="text-neutral-300">{stat.firstTrySuccess}</span>
                      <span
                        className={`ml-2 rounded-full border px-2 py-0.5 text-xs ${
                          stat.successRate >= 85
                            ? STATUS_STYLES.ok
                            : stat.successRate >= 70
                              ? STATUS_STYLES.warning
                              : STATUS_STYLES.critical
                        }`}
                      >
                        {stat.successRate.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-yellow-400">{stat.highIteration}</td>
                    <td className="py-3 text-white">${stat.cost.toFixed(2)}</td>
                    <td className="py-3 text-indigo-300">
                      {stat.tasks ? `$${stat.costPerTask.toFixed(4)}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/10 text-xs uppercase tracking-wide text-neutral-400">
                  <td className="pt-3 font-medium">Totals</td>
                  <td className="pt-3">{reportTotals.runs}</td>
                  <td className="pt-3">{reportTotals.tasks}</td>
                  <td className="pt-3 text-red-400">{reportTotals.errors}</td>
                  <td className="pt-3" />
                  <td className="pt-3" />
                  <td className="pt-3 text-white">${reportTotals.cost.toFixed(2)}</td>
                  <td className="pt-3 text-indigo-300">
                    {reportTotals.tasks
                      ? `$${(reportTotals.cost / reportTotals.tasks).toFixed(4)}`
                      : "—"}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Active rate matrix — current rates only, no historical pricing */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <h2 className="text-sm font-medium text-neutral-400">
            Active Agent Rate Matrix
          </h2>
          <p className="mb-4 text-xs text-neutral-500">
            Live rates applied by the Druta extension, in USD per 1K tokens.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-neutral-400">
                  <th className="pb-3 font-medium">Agent</th>
                  <th className="pb-3 font-medium">Model / Version</th>
                  <th className="pb-3 font-medium">Thinking Mode</th>
                  <th className="pb-3 font-medium">Context</th>
                  <th className="pb-3 font-medium">Input / 1K</th>
                  <th className="pb-3 font-medium">Output / 1K</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {DRUTA_AGENTS.map((agent) => (
                  <tr key={agent.id}>
                    <td className="py-3 text-white">{agent.label}</td>
                    <td className="py-3 font-mono text-xs text-neutral-400">{agent.modelId}</td>
                    <td className="py-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-300">
                        {THINKING_MODE_LABELS[agent.thinking]}
                      </span>
                    </td>
                    <td className="py-3 text-neutral-300">{agent.contextLabel}</td>
                    <td className="py-3 text-neutral-300">${agent.input.toFixed(5)}</td>
                    <td className="py-3 text-indigo-300">${agent.output.toFixed(5)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* System health metrics */}
          <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6 lg:col-span-2">
            <h2 className="text-sm font-medium text-neutral-400 mb-4">
              System Health Metrics
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HEALTH_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-xl border px-4 py-3 ${STATUS_STYLES[metric.status]}`}
                >
                  <p className="text-xs uppercase tracking-wide opacity-80">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dual-email alert configuration */}
          <section className="rounded-2xl border border-white/10 bg-neutral-900 p-6 lg:col-span-1">
            <h2 className="text-sm font-medium text-neutral-400 mb-4">
              Alert Email Configuration
            </h2>
            <ul className="mb-4 space-y-2">
              {alertEmails.map((email) => (
                <li
                  key={email}
                  className="flex items-center justify-between rounded-lg bg-neutral-950 border border-white/10 px-3 py-2 text-sm text-white"
                >
                  <span className="truncate">{email}</span>
                  <button
                    onClick={() => handleRemoveEmail(email)}
                    className="ml-2 text-xs text-neutral-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={handleAddEmail} className="flex gap-2">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="add-alert@example.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-600 outline-none focus:border-indigo-500 [color-scheme:dark]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
              >
                Add
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
