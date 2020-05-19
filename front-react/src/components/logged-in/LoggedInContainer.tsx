import React, { useEffect, useState } from "react";
import Nav from "./generic/menu/Nav";
import { useReduxSelector, useReduxDispatch } from "../../hooks/redux.hooks";
import { useHistory } from "react-router-dom";
import { AppStatus } from "../../redux/store/root.state";
import { action } from "../../redux/actions/generic.actions";
import { LOGGED_IN } from "../../types/redux/action.types";
import AuthLogic from "../../logic/auth.logic";
import GloballyBusy from "./generic/globally-busy/GloballyBusy";

interface LoggedInContainerProps {
  Component: React.ElementType;
}

const LoggedInContainer: React.FC<LoggedInContainerProps> = ({
  Component,
  ...rest
}) => {
  const history = useHistory();
  const dispatch = useReduxDispatch();
  const session = useReduxSelector((state) => state.session);
  const appStatus = useReduxSelector((state) => state.appStatus);

  const [sessionRenewalAttempted, setSessionRenewalAttempted] = useState(false);

  useEffect(() => {
    const renew = async () => {
      setSessionRenewalAttempted(true);
      console.log("Attempting to restore session");
      try {
        const result = await AuthLogic.renewToken().then(
          (x) =>
            new Promise<any>((resolve) => setTimeout(() => resolve(x), 1500))
        );
        dispatch(action(LOGGED_IN, result));
        console.log("session recovered");
      } catch (err) {
        history.push("/");
      }
    };

    if (!session && !sessionRenewalAttempted) renew();
  }, [dispatch, session, sessionRenewalAttempted, history]);

  if (appStatus === AppStatus.BusyLoggingIn) {
    return <GloballyBusy text="Login in progress... Please wait" />;
  }
  if (sessionRenewalAttempted && !session) {
    return <GloballyBusy text="Attempting to restore your session..." />;
  }

  return (
    <>
      <Component {...rest} />
      <Nav />
    </>
  );
};

export default LoggedInContainer;
