import { call, put, takeLatest } from "redux-saga/effects";
import { jokeySuccess, jokeyFailure } from "./action";
import * as service from "./services";

import { JokeyTypes } from "./types";

export function* watchGetJokeyCategory() {
	yield takeLatest(JokeyTypes.SYSTEM, getJokeyCategory);
}

export function* getJokeyCategory(data) {
	try {
		const response = yield call(service.getJokesCategory, data);
		return yield put(jokeySuccess(response));
	} catch (error) {
		return yield put(jokeyFailure(error.message));
	}
}
