import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  constantTimeEqual,
  deriveSessionToken,
  isValidSessionToken,
} from "../../../../config/adminAuth";

const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export async function GET() {
  const store = await cookies();
  const authenticated = await isValidSessionToken(store.get(ADMIN_SESSION_COOKIE)?.value);
  return NextResponse.json({ authenticated }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const masterKey = process.env.ADMIN_API_KEY;
  if (!masterKey) {
    return NextResponse.json({ error: "Admin access is not configured." }, { status: 503 });
  }

  let submitted = "";
  try {
    const body = (await request.json()) as { key?: unknown };
    submitted = typeof body.key === "string" ? body.key : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!submitted || !constantTimeEqual(submitted, masterKey)) {
    return NextResponse.json({ error: "Invalid admin key." }, { status: 401 });
  }

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, await deriveSessionToken(masterKey), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}
