import { NextResponse } from "next/server";
import { adminApp } from "@/libs/firebase-admin";
import { getAuth } from "firebase-admin/auth";

export async function POST(req) {
  try {
    const { token } = await req.json();

    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    const sessionCookie = await getAuth(adminApp).createSessionCookie(token, { expiresIn });

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "token",
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: Math.floor(expiresIn / 1000), 
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Failed to create session cookie:", err);
    return NextResponse.json({ success: false, error: "failed" }, { status: 401 });
  }
}