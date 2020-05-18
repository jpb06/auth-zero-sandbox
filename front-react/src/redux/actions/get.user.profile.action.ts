import AuthLogic from "../../logic/auth.logic";
import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { UserProfile } from "../../types/user.profile";
import { Session } from "../../types/session.type";
import { action } from "./generic.actions";
import { USER_PROFILE } from "../../types/redux/action.types";
import { Auth0UserProfile } from "auth0-js";
import { snackBarAction } from "./snackBar.action";
import { SnackbarType } from "../../components/generic/CustomSnackbar";

const getUserProfileAction = (
  session: Session
): ThunkResult<Promise<UserProfile | null>> => async (
  dispatch: ReduxDispatch
) => {
  let userProfile: UserProfile | null = null;

  try {
    // simulating delay
    const profile = await AuthLogic.getUserProfile(session).then(
      (x) =>
        new Promise<Auth0UserProfile>((resolve) =>
          setTimeout(() => resolve(x), 1500)
        )
    );

    const userProfile = {
      clientID: profile.clientID,
      picture: profile.picture,
      name: profile.name,
      nickname: profile.nickname,
      givenName: profile.given_name,
      familyName: profile.family_name,
      gender: profile.gender,
      email: profile.email,
      isEmailVerified: profile.email_verified,
      raw: JSON.stringify(profile, null, 2),
    };
    dispatch(action(USER_PROFILE, userProfile));
  } catch (err) {
    dispatch(snackBarAction(SnackbarType.error, err));
  }

  return userProfile;
};

export default getUserProfileAction;
