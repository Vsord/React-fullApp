import {
  FORM_USER_PENDING,
  FORM_USER_SUCCESS,
  FORM_USER_FAILURE,
  CLEAR_FORM_STATE,
} from "../actions/formAction";

let initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        error: null,
      };
    case FORM_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    case FORM_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CLEAR_FORM_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
