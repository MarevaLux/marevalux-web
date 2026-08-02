import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "marevalux_team_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

function signatureFor(expiresAt, secret) {
  return createHmac("sha256", secret)
    .update(`marevalux-team:${expiresAt}`)
    .digest("base64url");
}

export function portalIsConfigured() {
  return Boolean(
    process.env.MAREVALUX_TEAM_EMAIL &&
      process.env.MAREVALUX_TEAM_PASSWORD &&
      process.env.MAREVALUX_TEAM_SECRET,
  );
}

export function credentialsAreValid(email, password) {
  if (!portalIsConfigured()) return false;

  return (
    safeEqual(email.trim().toLowerCase(), process.env.MAREVALUX_TEAM_EMAIL.trim().toLowerCase()) &&
    safeEqual(password, process.env.MAREVALUX_TEAM_PASSWORD)
  );
}

export async function createTeamSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const signature = signatureFor(expiresAt, process.env.MAREVALUX_TEAM_SECRET);
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, `${expiresAt}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/equipo",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function requireTeamSession() {
  const secret = process.env.MAREVALUX_TEAM_SECRET;
  const token = (await cookies()).get(SESSION_COOKIE)?.value;

  if (!secret || !token) redirect("/equipo");

  const [expiresAtValue, signature] = token.split(".");
  if (!expiresAtValue || !signature) redirect("/equipo");

  const expiresAt = Number(expiresAtValue);
  const expectedSignature = signatureFor(expiresAtValue, secret);

  if (
    !expiresAt ||
    expiresAt <= Math.floor(Date.now() / 1000) ||
    !safeEqual(signature, expectedSignature)
  ) {
    redirect("/equipo");
  }
}

export async function destroyTeamSession() {
  (await cookies()).delete(SESSION_COOKIE);
}
