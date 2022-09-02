import {
  SIGNUP_USER_PENDING,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "../actions/formActions";

let initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        data: action.payload !== undefined ? action.payload : null,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
