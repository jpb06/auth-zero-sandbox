import { UserProfile } from "../types/user.profile";
import { useReduxDispatch, useReduxSelector } from "./redux.hooks";
import { useEffect } from "react";
import getUserProfileAction from "../redux/actions/get.user.profile.action";

const useUserProfileLoading = (): UserProfile | null => {
  const dispatch = useReduxDispatch();
  const userProfile = useReduxSelector((state) => state.userProfile);
  const session = useReduxSelector((state) => state.session);

  useEffect(() => {
    if (!userProfile && session) {
      dispatch(getUserProfileAction(session));
    }
  }, [dispatch, session, userProfile]);

  return userProfile;
};

export default useUserProfileLoading;
