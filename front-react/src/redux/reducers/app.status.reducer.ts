import { APP_BUSY, APP_AVAILABLE } from "../../types/redux/action.types";
import { AppStatus, initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.payload";

const appStatusReducer = (
  state: AppStatus = initialState.appStatus,
  action: ActionWithPayload<string, AppStatus>
) => {
  switch (action.type) {
    case APP_BUSY:
      return action.payload;
    case APP_AVAILABLE:
      return AppStatus.Available;
  }

  return state;
};

export default appStatusReducer;
