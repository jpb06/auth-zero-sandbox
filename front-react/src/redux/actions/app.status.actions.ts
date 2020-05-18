import { Action } from "redux";
import { notice, action } from "./generic.actions";
import { APP_BUSY, APP_AVAILABLE } from "../../types/redux/action.types";
import { AppStatus } from "../store/root.state";

export const appBusyAction = (status: AppStatus): Action =>
  action(APP_BUSY, status);

export const appAvailableAction = (): Action => notice(APP_AVAILABLE);
