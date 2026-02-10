import { cookies } from "next/headers";
import { adminApp } from "@/libs/firebase-admin";
import { getAuth } from "firebase-admin/auth";

export async function verifySession() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const decodedToken = await getAuth(adminApp).verifySessionCookie(token, true);
    return decodedToken;
  } catch (err) {
    console.error("Error verifying session cookie:", err);
    return null;
  }
}