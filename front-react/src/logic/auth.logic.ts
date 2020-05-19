import auth0 from "auth0-js";
import { AuthResult } from "../types/auth.result";
import { Session } from "../types/session.type";

export default class AuthLogic {
  static requiresSetup = true;
  static requestedScopes = "openid profile email read:timeline";

  static Instance = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    responseType: "token id_token",
    scope: AuthLogic.requestedScopes,
  });

  static login = () => {
    AuthLogic.Instance.authorize();
  };

  static handleAuthentication = async (): Promise<AuthResult> =>
    new Promise<AuthResult>((resolve, reject) => {
      // resolve({ error: "something bad occured." });

      AuthLogic.Instance.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          // expiresIn contains expiration in seconds
          // multiply by 1000 to convert to milliseconds
          // add current Unix epoch time (getTime)
          // = Unix epoch time when token will expire
          const date = new Date().getTime();
          const expiresAt = authResult.expiresIn
            ? authResult.expiresIn * 1000 + date
            : date;

          AuthLogic.scheduleTokenRenewal(expiresAt);
          resolve({
            session: {
              idToken: authResult.idToken,
              accessToken: authResult.accessToken,
              expiresAt,
            },
          });
        } else {
          resolve({ error: err ? err.error : "An unexpected error occured." });
        }
      });
    });

  static renewToken = async () =>
    new Promise<AuthResult>((resolve, reject) => {
      AuthLogic.Instance.checkSession({}, (err, result) => {
        if (err) {
          const description = `Error: ${err.error} - ${err.errorDescription}`;
          console.log(description);
          reject(description);
        } else {
          resolve(result);
        }
      });
    });

  static scheduleTokenRenewal = (expiresAt: number) => {
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      setTimeout(() => {
        AuthLogic.renewToken();
      }, delay);
    }
  };

  static getUserProfile = async (
    session: Session
  ): Promise<auth0.Auth0UserProfile> => {
    return new Promise<auth0.Auth0UserProfile>((resolve, reject) => {
      AuthLogic.Instance.client.userInfo(
        session.accessToken,
        (err, profile) => {
          if (err) reject(err);

          resolve(profile);
        }
      );
    });
  };

  static userHasScopes = (scopes: string[]) =>
    scopes.every((scope) => AuthLogic.requestedScopes.includes(scope));
}
