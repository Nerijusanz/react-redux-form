import axios from "axios";
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

function* getUsersApi() {
  return yield axios(`https://jsonplaceholder.typicode.com/users`);
}

// ---------------sagas actions-----------------------------------

export function* callUserLocationSaga(action) {
  // const { location } = action.payload;

  try {
    // const user = yield call("API request to server here...", action.payload);
    // const results = yield call(getUsersByLocation, location);
    const res = yield call(getUsersApi);

    if (res.data) {
      const payload = action.payload;
      payload.users = res.data;

      yield put(userLocationRequestSuccess(payload));
    }
  } catch (err) {
    yield put(userLocationRequestFailure(err)); // got errors from server
  }
}

export function* getUserLocationSaga() {
  yield takeLatest(USER_LOCATION_REQUEST, callUserLocationSaga);
}
