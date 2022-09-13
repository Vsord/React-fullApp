export const DATA_PENDING = "DATA_PENDING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const dataPending = () => {
  return {
    type: DATA_PENDING,
  };
};

export const dataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    data: data,
  };
};

export const dataFailure = (error) => {
  return {
    type: DATA_FAILURE,
    error: error,
  };
};
