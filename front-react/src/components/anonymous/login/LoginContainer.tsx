import { SnackbarType } from "../../generic/CustomSnackbar";
import Login from "./Login";
import React from "react";
import { apiGet } from "../../../logic/api.util";
import { useReduxDispatch } from "../../../hooks/redux.hooks";
import { snackBarAction } from "../../../redux/actions/snackBar.action";

const LoginContainer = () => {
  const dispatch = useReduxDispatch();

  const handleTestPrivateApiCall = async () => {
    let type = SnackbarType.error;
    let text = "";

    try {
      const result = await apiGet("private", null);

      if (result.ok) {
        type = SnackbarType.success;
        text = (await result.json()).message;
      } else {
        text = result.statusText;
      }
    } catch (err) {
      text = err.message;
    }

    dispatch(snackBarAction(type, text));
  };
  return <Login onTestPrivateApiCall={handleTestPrivateApiCall} />;
};

export default LoginContainer;
