import { LOGGED_IN } from "../../types/redux/action.types";
import { ActionWithPayload } from "../../types/redux/action.payload";
import { initialState } from "../store/root.state";
import { Session } from "../../types/session.type";

const sessionReducer = (
  state: Session | null = initialState.session,
  action: ActionWithPayload<string, Session | null>
) => {
  if (action.type === LOGGED_IN) {
    return action.payload as Session;
  }

  return state;
};

export default sessionReducer;
