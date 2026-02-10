import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminApp } from "@/libs/firebase-admin";
import { getAuth } from "firebase-admin/auth";

export async function POST(req) {
  try {
    const token = cookies().get("token")?.value;

    if (token) {
      try {
        const decoded = await getAuth(adminApp).verifySessionCookie(token, true);
        await getAuth(adminApp).revokeRefreshTokens(decoded.uid);
      } catch (err) {
        console.error("Error verifying/revoking session cookie:", err);
      }
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
