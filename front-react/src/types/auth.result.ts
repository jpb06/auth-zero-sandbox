import { Session } from "./session.type";

export interface AuthResult {
  session?: Session;
  error?: string;
}
