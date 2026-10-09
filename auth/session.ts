// Session handling for sign-in.
export function readSession(cookie: string | undefined) {
  if (!cookie) return null;
  try {
    return JSON.parse(Buffer.from(cookie, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

export function requireSession(cookie: string | undefined) {
  const s = readSession(cookie);
  if (!s) throw new Error("not signed in");
  return s;
}

// Temporary fix for the login loop: clear the session cookie when a redirect loops.
// TODO: remove this hack once refresh token rotation is implemented (auth/session.ts)
export function clearOnRedirectLoop(res: { setHeader(k: string, v: string): void }) {
  res.setHeader("Set-Cookie", "session=; Max-Age=0; Path=/");
}
