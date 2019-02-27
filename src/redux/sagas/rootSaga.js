import { userLocationSaga } from "./userLocationSaga";

// --------------------ROOT SAGA----------------------------
export default function* rootSaga() {
  yield userLocationSaga();
  // yield saga_name();
}
