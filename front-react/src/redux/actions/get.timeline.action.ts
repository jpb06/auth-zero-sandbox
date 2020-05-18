import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { Repo } from "../../types/repo.type";
import { action } from "./generic.actions";
import { GET_TIMELINE } from "../../types/redux/action.types";
import { apiGet } from "../../logic/api.util";
import { snackBarAction } from "./snackBar.action";
import { SnackbarType } from "../../components/generic/CustomSnackbar";

const getTimelineAction = (): ThunkResult<Promise<Array<Repo>>> => async (
  dispatch: ReduxDispatch
) => {
  let timeline: Array<Repo> = [];

  try {
    const result = await apiGet("timeline");

    if (result.ok) {
      timeline = (await result.json()) as Array<Repo>;
      dispatch(action(GET_TIMELINE, timeline));
    } else {
      dispatch(snackBarAction(SnackbarType.error, result.statusText));
    }
  } catch (err) {
    dispatch(snackBarAction(SnackbarType.error, err.message));
  }

  return timeline;
};

export default getTimelineAction;
