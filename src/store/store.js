import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { signUpReducer } from "./reducers/signUpReducer";
import { logInReducer } from "./reducers/logInReducer";

const rootReducer = combineReducers({
  signUpReducer: signUpReducer,
  logInReducer: logInReducer,
});

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
