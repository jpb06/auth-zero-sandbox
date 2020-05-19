import { Session } from "../../types/session.type";
import { UserProfile } from "../../types/user.profile";
import { Repo } from "../../types/repo.type";
import {
  CustomSnackbarData,
  SnackbarType,
} from "../../components/generic/CustomSnackbar";

export enum AppStatus {
  BusyRetrievingProfile,
  BusyRetrievingTimeline,
  BusyLoggingIn,
  BusyMakingRestrictedApiCalls,
  Available,
  Errored,
}

export interface RootState {
  readonly appStatus: AppStatus;
  readonly snackBar: CustomSnackbarData;
  readonly session: Session | null;
  readonly userProfile: UserProfile | null;
  readonly timeline: Array<Repo>;
}

export const initialState: RootState = {
  appStatus: AppStatus.Available,
  snackBar: {
    isOpen: false,
    type: SnackbarType.error,
    text: "",
  },
  session: null,
  userProfile: null,
  timeline: [],
};
