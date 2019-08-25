import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";

import ranks from "./reducers/ranks";
import turmas from "./reducers/turmas";
import alunos from "./reducers/alunos";

const rootReducer = combineReducers({ ranks, turmas, alunos });
const preloadedState = [applyMiddleware(ThunkMiddleware)];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (process.env.NODE_ENV !== "production") {
  preloadedState.push(devtools);
}

const store = createStore(rootReducer, compose(...preloadedState));

export default store;
