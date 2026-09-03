"use client";

import { useState } from "react";
import { ADMIN_DASHBOARD_PATH, ADMIN_SESSION_ENDPOINT } from "../../../config/adminAuth";

export default function AdminUnlock() {
  const [key, setKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch(ADMIN_SESSION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: key.trim() }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? "Unable to verify key.");
        return;
      }
      window.location.assign(ADMIN_DASHBOARD_PATH);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-xl"
      >
        <h1 className="text-xl font-semibold text-white mb-2">Druta Systems Admin</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Enter the admin master key. You stay signed in on this device afterwards.
        </p>

        <label htmlFor="adminKey" className="block text-sm text-neutral-300 mb-1">
          Admin API Key
        </label>
        <div className="relative mb-2">
          <input
            id="adminKey"
            type={showKey ? "text" : "password"}
            value={key}
            onChange={(e) => setKey(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            placeholder="druta_admin_••••••••"
            className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 pr-16 text-sm text-white placeholder-neutral-600 outline-none focus:border-indigo-500 [color-scheme:dark]"
          />
          <button
            type="button"
            onClick={() => setShowKey((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
          >
            {showKey ? "Hide" : "Show"}
          </button>
        </div>

        {error && <p className="text-sm text-red-400 mb-2">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-60 transition-colors"
        >
          {submitting ? "Verifying…" : "Unlock Dashboard"}
        </button>
      </form>
    </main>
  );
}
