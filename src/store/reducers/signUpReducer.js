import {
  SIGNUP_USER_PENDING,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  CLEAR_SIGNUP_STATE,
} from "../actions/signUpAction";

let initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CLEAR_SIGNUP_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
