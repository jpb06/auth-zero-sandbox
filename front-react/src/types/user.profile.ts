export interface UserProfile {
  clientID: string;
  picture: string;
  name: string;
  nickname: string;
  givenName?: string;
  familyName?: string;
  gender?: string;
  email?: string;
  isEmailVerified?: Boolean;
  raw: string;
}
