import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./logged-in/home/Home";
import Profile from "./logged-in/profile/ProfileContainer";
import theme from "../logic/create.theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import LoginContainer from "./anonymous/login/LoginContainer";
import Callback from "./anonymous/callback/Callback";
import LoggedInContainer from "./logged-in/LoggedInContainer";
import Timeline from "./logged-in/timeline/Timeline";
import { useReduxSelector, useReduxDispatch } from "../hooks/redux.hooks";
import { notice } from "../redux/actions/generic.actions";
import { CLEAR_SNACKBAR } from "../types/redux/action.types";
import CustomSnackbar from "./generic/CustomSnackbar";

const App = () => {
  const dispatch = useReduxDispatch();
  const snackBarData = useReduxSelector((state) => state.snackBar);

  const handleCloseSnackbar = () => dispatch(notice(CLEAR_SNACKBAR));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/callback" component={Callback} />
        <Route
          path="/home"
          render={(props) => <LoggedInContainer Component={Home} {...props} />}
        />
        <Route
          path="/timeline"
          render={(props) => (
            <LoggedInContainer Component={Timeline} {...props} />
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <LoggedInContainer Component={Profile} {...props} />
          )}
        />
      </BrowserRouter>
      <CustomSnackbar {...snackBarData} onClose={handleCloseSnackbar} />
    </MuiThemeProvider>
  );
};

export default App;
