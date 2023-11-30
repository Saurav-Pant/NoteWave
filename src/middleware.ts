import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const __session = request.cookies.get("__session");
  if (!__session?.value) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/Upload"],
};
