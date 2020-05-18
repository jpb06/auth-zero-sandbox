import { ActionWithPayload } from "../../types/redux/action.payload";
import { initialState } from "../store/root.state";
import { UserProfile } from "../../types/user.profile";
import { USER_PROFILE } from "../../types/redux/action.types";

const userProfileReducer = (
  state: UserProfile | null = initialState.userProfile,
  action: ActionWithPayload<string, UserProfile | null>
) => {
  if (action.type === USER_PROFILE) return action.payload as UserProfile;

  return state;
};

export default userProfileReducer;
