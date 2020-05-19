import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { Repo } from "../../types/repo.type";
import { action } from "./generic.actions";
import { GET_TIMELINE } from "../../types/redux/action.types";
import { apiGet } from "../../logic/api.util";
import { snackBarAction } from "./snackBar.action";
import { SnackbarType } from "../../components/generic/CustomSnackbar";
import { appBusyAction } from "./app.status.actions";
import { AppStatus } from "../store/root.state";
import { Session } from "../../types/session.type";

const getTimelineAction = (
  session: Session
): ThunkResult<Promise<Array<Repo>>> => async (dispatch: ReduxDispatch) => {
  dispatch(appBusyAction(AppStatus.BusyRetrievingTimeline));
  let timeline: Array<Repo> = [];

  try {
    const result = await apiGet("timeline", session.accessToken);

    if (result.ok) {
      timeline = (await result.json()) as Array<Repo>;
      dispatch(action(GET_TIMELINE, timeline));
    } else {
      dispatch(snackBarAction(SnackbarType.error, result.statusText));
    }
  } catch (err) {
    dispatch(snackBarAction(SnackbarType.error, err.message));
  }

  dispatch(appBusyAction(AppStatus.Available));
  return timeline;
};

export default getTimelineAction;
