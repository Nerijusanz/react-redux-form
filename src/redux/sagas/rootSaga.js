import { fork } from "redux-saga/effects";
import { getUserLocationSaga } from "./userLocationSaga";

// --------------------ROOT SAGA----------------------------
export default function* rootSaga() {
  yield [yield fork(getUserLocationSaga)];
}
