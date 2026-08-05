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
