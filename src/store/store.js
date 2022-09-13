import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchReducer } from "./reducers/fetchReducer";
import { formReducer } from "./reducers/formReducer";

const rootReducer = combineReducers({
  formReducer: formReducer,
  fetchReducer: fetchReducer,
});

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
