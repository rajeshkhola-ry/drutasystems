/**
 * Mirrors the `MODELS` registry in the Druta AI Agent extension
 * (druta-extension/src/agentRunner.ts). The extension is a separate repo, so
 * this list is kept in sync by hand — add the new `id`/`label` here whenever a
 * model is added there and it flows through the whole reports table.
 *
 * Rates are USD per 1K tokens, matching the extension's cost estimator.
 */
export type DrutaAgent = {
  id: string;
  label: string;
  modelId: string;
  provider: "anthropic" | "openai" | "deepseek";
  thinking: "low" | "medium" | "high" | "advanced";
  contextLabel: string;
  input: number;
  output: number;
};

export const DRUTA_AGENTS: DrutaAgent[] = [
  { id: "haiku", label: "Claude Haiku", modelId: "claude-3-haiku-20240307", provider: "anthropic", thinking: "low", contextLabel: "200K", input: 0.00025, output: 0.00125 },
  { id: "gpt-4o-mini", label: "ChatGPT (GPT-4o-mini)", modelId: "gpt-4o-mini", provider: "openai", thinking: "low", contextLabel: "128K", input: 0.00015, output: 0.0006 },
  { id: "deepseek-v3", label: "DeepSeek-V3", modelId: "deepseek-v3", provider: "deepseek", thinking: "low", contextLabel: "1M", input: 0.00027, output: 0.0011 },
  { id: "sonnet", label: "Claude Sonnet", modelId: "claude-3-5-sonnet-20241022", provider: "anthropic", thinking: "medium", contextLabel: "200K", input: 0.003, output: 0.015 },
  { id: "gpt-4o", label: "ChatGPT (GPT-4o)", modelId: "gpt-4o", provider: "openai", thinking: "medium", contextLabel: "128K", input: 0.0025, output: 0.01 },
  { id: "deepseek-r1", label: "DeepSeek-R1", modelId: "deepseek-r1", provider: "deepseek", thinking: "high", contextLabel: "1M", input: 0.00055, output: 0.00219 },
  { id: "o3-mini", label: "ChatGPT (o3-mini)", modelId: "o3-mini", provider: "openai", thinking: "high", contextLabel: "200K", input: 0.0011, output: 0.0044 },
  { id: "o1", label: "ChatGPT (o1)", modelId: "o1", provider: "openai", thinking: "advanced", contextLabel: "200K", input: 0.015, output: 0.06 },
  { id: "opus", label: "Claude Opus", modelId: "claude-3-opus-20240229", provider: "anthropic", thinking: "advanced", contextLabel: "Max", input: 0.015, output: 0.075 },
];

export const DRUTA_AGENT_LABELS = DRUTA_AGENTS.map((a) => a.label);

export const THINKING_MODE_LABELS: Record<DrutaAgent["thinking"], string> = {
  low: "Fast",
  medium: "Balanced",
  high: "Reasoning",
  advanced: "Deep Reasoning",
};
