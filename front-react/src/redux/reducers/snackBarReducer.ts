import {
  CLEAR_SNACKBAR,
  SNACKBAR,
  APP_BUSY,
} from "../../types/redux/action.types";
import { ActionWithPayload } from "../../types/redux/action.payload";
import { initialState } from "../store/root.state";
import { CustomSnackbarData } from "../../components/generic/CustomSnackbar";

const snackBarReducer = (
  state: CustomSnackbarData | null = initialState.snackBar,
  action: ActionWithPayload<string, CustomSnackbarData | null>
) => {
  switch (action.type) {
    case SNACKBAR:
      return action.payload as CustomSnackbarData;
    case CLEAR_SNACKBAR:
    case APP_BUSY:
      return {
        isOpen: false,
        type: state?.type,
        text: "",
      };
  }

  return state;
};

export default snackBarReducer;
