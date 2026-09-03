"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ADMIN_DASHBOARD_PATH, ADMIN_SESSION_ENDPOINT } from "../../config/adminAuth";

/** Renders nothing unless this device holds a valid admin session cookie. */
export default function AdminReportsButton() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function checkSession() {
      try {
        const response = await fetch(ADMIN_SESSION_ENDPOINT, { cache: "no-store" });
        const body = (await response.json()) as { authenticated?: boolean };
        if (!ignore) setAuthenticated(Boolean(body.authenticated));
      } catch {
        if (!ignore) setAuthenticated(false);
      }
    }
    checkSession();
    return () => {
      ignore = true;
    };
  }, []);

  if (!authenticated) return null;

  return (
    <Link
      href={ADMIN_DASHBOARD_PATH}
      className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold transition-all"
    >
      Reports
    </Link>
  );
}
