import { JokeyTypes } from "./types";

export const jokey = (payload) => ({
  type: JokeyTypes.SYSTEM,
  payload
});
export const jokeySuccess = (payload) => ({
  type: JokeyTypes.SYSTEM_SUCCESS,
  payload
});
export const jokeyFailure = (payload) => ({
  type: JokeyTypes.SYSTEM_FAILURE,
  payload
});
