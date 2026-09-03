/**
 * Mirrors the `MODELS` registry in the Druta AI Agent extension
 * (druta-extension/src/agentRunner.ts). The extension is a separate repo, so
 * this list is kept in sync by hand — add the new `id`/`label` here whenever a
 * model is added there and it flows through the whole reports table.
 */
export type DrutaAgent = {
  id: string;
  label: string;
  provider: "anthropic" | "openai" | "deepseek";
};

export const DRUTA_AGENTS: DrutaAgent[] = [
  { id: "haiku", label: "Claude Haiku", provider: "anthropic" },
  { id: "gpt-4o-mini", label: "ChatGPT (GPT-4o-mini)", provider: "openai" },
  { id: "deepseek-v3", label: "DeepSeek-V3", provider: "deepseek" },
  { id: "sonnet", label: "Claude Sonnet", provider: "anthropic" },
  { id: "gpt-4o", label: "ChatGPT (GPT-4o)", provider: "openai" },
  { id: "deepseek-r1", label: "DeepSeek-R1", provider: "deepseek" },
  { id: "o3-mini", label: "ChatGPT (o3-mini)", provider: "openai" },
  { id: "o1", label: "ChatGPT (o1)", provider: "openai" },
  { id: "opus", label: "Claude Opus", provider: "anthropic" },
];

export const DRUTA_AGENT_LABELS = DRUTA_AGENTS.map((a) => a.label);
