import { Session } from "../types/session.type";

export const persistSession = (session: Session) => {
  localStorage.setItem("idToken", session.idToken);
  localStorage.setItem("accessToken", session.accessToken);
  localStorage.setItem("expiresAt", JSON.stringify(session.expiresAt));
};

export const recoverSession = (): Session | null => {
  const idToken = localStorage.getItem("idToken");
  const accessToken = localStorage.getItem("accessToken");
  const expiration = localStorage.getItem("expiresAt");

  if (!idToken || !accessToken || !expiration) return null;

  const isExpirationNumeric = /^\d+$/.test(expiration);
  if (!isExpirationNumeric) return null;

  const expiresAt = parseInt(expiration, 10);
  const isExpirationValid = expiresAt > new Date().getTime();
  if (!isExpirationValid) return null;

  return {
    idToken,
    accessToken,
    expiresAt,
  };
};

export const clearSession = () => {
  localStorage.clear();
};
