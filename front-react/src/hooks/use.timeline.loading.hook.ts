import { useReduxDispatch, useReduxSelector } from "./redux.hooks";
import { useEffect } from "react";
import { Repo } from "../types/repo.type";
import getTimelineAction from "../redux/actions/get.timeline.action";

const useTimelineLoading = (): Array<Repo> => {
  const dispatch = useReduxDispatch();
  const timeline = useReduxSelector((state) => state.timeline);
  const session = useReduxSelector((state) => state.session);

  useEffect(() => {
    if (timeline.length === 0 && session) {
      dispatch(getTimelineAction(session));
    }
  }, [dispatch, session, timeline]);

  return timeline;
};

export default useTimelineLoading;
