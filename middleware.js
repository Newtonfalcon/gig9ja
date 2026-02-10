import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const protectedPaths = ["/dashboard", "/onboardingselect"];
  const authPaths = ["/login", "/register"];

    const isProtectedPath = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));
    const isAuthPath = authPaths.some((path) => req.nextUrl.pathname.startsWith(path));

    if (isProtectedPath && !token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isAuthPath && token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboardingselect/:path*", "/login", "/register"],
};