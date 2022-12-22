import axios from "axios";

export const SignUpApiCall = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    try {
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/signup",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );
        if (res.data.success) {
          dispatch({
            type: "SIGNUP_SUCCESS",
            payload: res.data.message,
          });
        } else {
          dispatch({
            type: "SIGNUP_FAILED",
            payload: res.data.message,
          });
        }
      } else {
        dispatch({
          type: "SIGNUP_FAILED",
          payload: "All Fields are Required",
        });
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch({
              type: "SIGNUP_FAILED",
              payload: ex.response.data.message,
            });
          }
        }
      }
    }
  };
};

export const UserSignUpApiCall = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    try {
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/signup",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );
        if (res.data.success) {
          dispatch({
            type: "SIGNUP_SUCCESS",
            payload: res.data.message,
          });
        } else {
          dispatch({
            type: "SIGNUP_FAILED",
            payload: res.data.message,
          });
        }
      } else {
        dispatch({
          type: "SIGNUP_FAILED",
          payload: "All Fields are Required",
        });
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch({
              type: "SIGNUP_FAILED",
              payload: ex.response.data.message,
            });
          }
        }
      }
    }
  };
};
