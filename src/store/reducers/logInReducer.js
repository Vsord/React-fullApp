import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CLEAR_LOGIN_STATE,
} from "../actions/logInAction";

let initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CLEAR_LOGIN_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
