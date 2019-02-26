import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();
// --------REDUX-STORE--------

const initialState = {};

const middleware = [saga, thunk];

const store = createStore(
  rootReducer,
  initialState,
  process.env.REACT_APP_NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

saga.run(rootSaga);

// get redux store initials state
// console.log(store.getState());

export default store;
