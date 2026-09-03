"use client";

import { useSyncExternalStore } from "react";

/**
 * ── MACHINE MIGRATION POINT ────────────────────────────────────────────────
 * To move admin access to a new laptop, change ONLY this value (in .env.local
 * on that machine) and re-register the browser once via:
 *   /admin/dashboard?machine-setup=<the same value>
 * Every other device gets the reports button hidden and the route 404'd.
 *
 * Note: NEXT_PUBLIC_* values ship in the client bundle, so this is a device
 * gate, not a secret. The API-key unlock remains the real credential check.
 */
export const ADMIN_MACHINE_ID = process.env.NEXT_PUBLIC_ADMIN_MACHINE_ID ?? "";

export const MACHINE_ID_STORAGE = "druta_machine_id";
export const MACHINE_SETUP_PARAM = "machine-setup";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): boolean {
  if (!ADMIN_MACHINE_ID) return false;
  if (window.localStorage.getItem(MACHINE_ID_STORAGE) === ADMIN_MACHINE_ID) return true;
  return new URLSearchParams(window.location.search).get(MACHINE_SETUP_PARAM) === ADMIN_MACHINE_ID;
}

/** Persists this browser as the admin machine when the setup value matches. */
export function registerAdminMachineFromUrl(): void {
  if (!ADMIN_MACHINE_ID) return;
  const candidate = new URLSearchParams(window.location.search).get(MACHINE_SETUP_PARAM);
  if (candidate !== ADMIN_MACHINE_ID) return;
  window.localStorage.setItem(MACHINE_ID_STORAGE, candidate);
  listeners.forEach((listener) => listener());
}

export function useIsAdminMachine(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/** `null` until hydration completes, so callers can avoid blocking too early. */
export function useAdminMachineStatus(): boolean | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
