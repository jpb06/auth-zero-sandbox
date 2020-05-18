import { Action } from "redux";
import { ActionWithPayload } from "../../types/redux/action.payload";

export function action<TPayload>(
  type: string,
  payload: TPayload
): ActionWithPayload<string, TPayload> {
  return { type, payload };
}
export const notice = (type: string): Action => ({ type });
