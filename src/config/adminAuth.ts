/**
 * Admin session primitives. Nothing secret lives here — the master key is read
 * only from the server-side `ADMIN_API_KEY` env var (never `NEXT_PUBLIC_`), so
 * it is never shipped to the browser.
 *
 * Any future user-facing auth must NOT reuse this cookie or key. Give it its
 * own cookie name, its own env var, and its own route prefix.
 */
export const ADMIN_SESSION_COOKIE = "druta_admin_session";
export const ADMIN_SESSION_ENDPOINT = "/api/admin/session";
export const ADMIN_UNLOCK_PATH = "/admin/unlock";
export const ADMIN_DASHBOARD_PATH = "/admin/dashboard";

const SESSION_SALT = "druta-admin-session-v1";

/** Deterministic HMAC of the master key, so no session store is needed. */
export async function deriveSessionToken(masterKey: string): Promise<string> {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(masterKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(SESSION_SALT));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  const masterKey = process.env.ADMIN_API_KEY;
  if (!masterKey || !token) return false;
  return constantTimeEqual(token, await deriveSessionToken(masterKey));
}
