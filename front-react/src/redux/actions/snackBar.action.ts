import { Action } from "redux";
import { action } from "./generic.actions";
import { SNACKBAR } from "../../types/redux/action.types";
import { SnackbarType } from "../../components/generic/CustomSnackbar";

export const snackBarAction = (type: SnackbarType, text: string): Action =>
  action(SNACKBAR, {
    isOpen: true,
    type,
    text,
  });
