import { Action } from "redux";

export interface ActionWithPayload<TType extends string, TPayload>
  extends Action<TType> {
  payload: TPayload;
}
