import AuthLogic from "../../logic/auth.logic";
import { ReduxDispatch } from "../../hooks/redux.hooks";
import { ThunkResult } from "../../types/redux/thunk.result";
import { notice } from "./generic.actions";
import { CLEAR_SESSION } from "../../types/redux/action.types";

const logoutAction = (): ThunkResult<void> => (dispatch: ReduxDispatch) => {
  AuthLogic.Instance.logout({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    returnTo: "http://localhost:3000",
  });
  dispatch(notice(CLEAR_SESSION));
};

export default logoutAction;
