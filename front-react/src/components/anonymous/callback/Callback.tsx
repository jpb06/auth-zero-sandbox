import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useReduxDispatch } from "../../../hooks/redux.hooks";
import loginAction from "../../../redux/actions/login.action";
import Busy from "../../generic/busy/Busy";

const Callback = () => {
  const dispatch = useReduxDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const result = dispatch(loginAction(location.hash));
    if (result) {
      history.push("/home");
    } else {
      history.push("/error");
    }
  }, [dispatch, location.hash, history]);

  return <Busy text="Login in progress... Please wait" />;
};

export default Callback;
