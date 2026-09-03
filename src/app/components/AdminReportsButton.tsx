"use client";

import Link from "next/link";
import { useIsAdminMachine } from "../../config/adminMachine";

/** Renders nothing unless this browser is the registered admin machine. */
export default function AdminReportsButton() {
  const isAdminMachine = useIsAdminMachine();
  if (!isAdminMachine) return null;

  return (
    <Link
      href="/admin/dashboard"
      className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold transition-all"
    >
      Reports
    </Link>
  );
}
