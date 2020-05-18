import AuthLogic from "../../logic/auth.logic";
import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { appBusyAction, appAvailableAction } from "./app.status.actions";
import { LOGGED_IN } from "../../types/redux/action.types";
import { action } from "./generic.actions";
import { AuthResult } from "../../types/auth.result";
import { persistSession } from "../../logic/session.logic";
import { AppStatus } from "../store/root.state";
import { snackBarAction } from "./snackBar.action";
import { SnackbarType } from "../../components/generic/CustomSnackbar";

const loginAction = (location: string): ThunkResult<Promise<boolean>> => async (
  dispatch: ReduxDispatch
) => {
  dispatch(appBusyAction(AppStatus.BusyLoggingIn));

  // Handle authentication if expected values are in url
  if (!/access_token|id_token|error/.test(location)) {
    dispatch(snackBarAction(SnackbarType.error, "Invalid callback url"));
    return false;
  }

  // simulating delay
  const result = await AuthLogic.handleAuthentication().then(
    (x) =>
      new Promise<AuthResult>((resolve) => setTimeout(() => resolve(x), 1500))
  );
  if (result.session) {
    persistSession(result.session);
    dispatch(action(LOGGED_IN, result.session));
  } else if (result.error) {
    dispatch(snackBarAction(SnackbarType.error, result.error));
  }

  dispatch(appAvailableAction());
  return false;
};

export default loginAction;
