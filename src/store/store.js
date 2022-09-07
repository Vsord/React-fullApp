import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { formReducer } from "./reducers/formReducer";

const rootReducer = combineReducers({
  formReducer: formReducer,
});

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
