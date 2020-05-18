import React, { useEffect } from "react";
import Nav from "./generic/menu/Nav";
import { useReduxSelector } from "../../hooks/redux.hooks";
import { useHistory } from "react-router-dom";
import { AppStatus } from "../../redux/store/root.state";
import Busy from "../generic/busy/Busy";

interface LoggedInContainerProps {
  Component: React.ElementType;
}

const LoggedInContainer: React.FC<LoggedInContainerProps> = ({
  Component,
  ...rest
}) => {
  const session = useReduxSelector((state) => state.session);
  const appStatus = useReduxSelector((state) => state.appStatus);
  const history = useHistory();

  useEffect(() => {
    if (appStatus === AppStatus.Available && !session) {
      history.push("/");
    }
  }, [history, session, appStatus]);

  if (appStatus === AppStatus.BusyLoggingIn) {
    return <Busy text="Login in progress... Please wait" />;
  }

  return (
    <>
      <Component {...rest} />
      <Nav />
    </>
  );
};

export default LoggedInContainer;
