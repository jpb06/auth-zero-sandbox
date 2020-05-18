import { ActionWithPayload } from "../../types/redux/action.payload";
import { initialState } from "../store/root.state";
import { GET_TIMELINE } from "../../types/redux/action.types";
import { Repo } from "../../types/repo.type";

const timelineReducer = (
  state: Array<Repo> | null = initialState.timeline,
  action: ActionWithPayload<string, Array<Repo> | null>
) => {
  if (action.type === GET_TIMELINE) return action.payload as Array<Repo>;

  return state;
};

export default timelineReducer;
