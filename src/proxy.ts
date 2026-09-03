import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidSessionToken } from "./config/adminAuth";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (await isValidSessionToken(token)) return NextResponse.next();

  // Rewrite rather than redirect so the route is indistinguishable from a
  // missing page for anyone without the key.
  return NextResponse.rewrite(new URL("/not-found", request.url), { status: 404 });
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
