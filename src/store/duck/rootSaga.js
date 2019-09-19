import { all } from "redux-saga/effects";
import { watchGetJokeyCategory } from "./jokey/saga";

export default function* rootSaga() {
	return yield all([watchGetJokeyCategory()]);
}
