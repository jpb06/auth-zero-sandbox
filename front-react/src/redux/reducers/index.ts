import { combineReducers } from "redux";
import appStatusReducer from "./app.status.reducer";
import sessionReducer from "./session.reducer";
import userProfileReducer from "./user.profile.reducer";
import timelineReducer from "./timeline.reducer";
import snackBarReducer from "./snackBarReducer";

const rootReducer = combineReducers({
  appStatus: appStatusReducer,
  snackBar: snackBarReducer,
  session: sessionReducer,
  userProfile: userProfileReducer,
  timeline: timelineReducer,
});

export default rootReducer;
