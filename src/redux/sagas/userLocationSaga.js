import { call, put, takeLatest } from "redux-saga/effects";
import {
  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_FAILURE
} from "../types/userTypes";

// ----------------dispatch to redux------------------------
export const userLocationRequest = data => ({
  // this call come from LocationForm.js submit();  dispatch(userLocationRequest(value));
  type: USER_LOCATION_REQUEST,
  payload: data
});

const userLocationRequestSuccess = data => ({
  type: USER_LOCATION_SUCCESS,
  payload: data
});

const userLocationRequestFailure = error => ({
  type: USER_LOCATION_FAILURE,
  payload: error
});

// ---------------sagas actions-----------------------------------

export function* callUserLocationSaga(action) {
  try {
    // const user = yield call("API request to server here...", action.payload);

    yield put(userLocationRequestSuccess(action.payload));
  } catch (err) {
    yield put(userLocationRequestFailure(err)); // got errors from server
  }
}

export function* userLocationSaga() {
  yield takeLatest(USER_LOCATION_REQUEST, callUserLocationSaga);
}
