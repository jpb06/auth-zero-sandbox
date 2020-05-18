import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { appBusyAction, appAvailableAction } from "./app.status.actions";
import { AppStatus } from "../store/root.state";
import { apiGet } from "../../logic/api.util";
import { snackBarAction } from "./snackBar.action";
import { SnackbarType } from "../../components/generic/CustomSnackbar";

export enum ApiRestriction {
  Scope,
  Role,
}

const getRouteFor = (guard: ApiRestriction) => {
  let route = "";

  switch (guard) {
    case ApiRestriction.Role:
      route = "restricted/role";
      break;
    case ApiRestriction.Scope:
      route = "restricted/scope";
      break;
    default:
      throw new Error(`ApiRestriction case missing - ${guard}`);
  }
  return route;
};

const restrictedCallAction = (
  guard: ApiRestriction
): ThunkResult<Promise<boolean>> => async (dispatch: ReduxDispatch) => {
  dispatch(appBusyAction(AppStatus.BusyMakingRestrictedApiCalls));

  let outcome = false;

  try {
    const result = await apiGet(getRouteFor(guard));
    if (result.ok) {
      outcome = true;
      dispatch(snackBarAction(SnackbarType.success, await result.text()));
    } else {
      dispatch(snackBarAction(SnackbarType.error, result.statusText));
    }
  } catch (err) {
    dispatch(snackBarAction(SnackbarType.error, err.message));
  }

  dispatch(appAvailableAction());
  return outcome;
};

export default restrictedCallAction;
