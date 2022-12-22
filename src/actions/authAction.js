import axios from "axios";

export const Login_Init = () => {
  return {
    type: "LOGIN_INIT",
  };
};

export const Login_Success = (data, token, role) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      data,
      token,
      role,
    },
  };
};

export const Login_Failed = (error) => {
  return {
    type: "LOGIN_FAILED",
    payload: error,
  };
};

export const LoginApiCall = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(Login_Init());
      if (email && password) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        );
        if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", "User");
        const role = localStorage.getItem("role");
        dispatch(Login_Success(res.data.user, res.data.token, role));
        } else {
          dispatch(Login_Failed(res.data.message));
        }
      } else {
        dispatch(Login_Failed("Email and Password are required"));
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch(Login_Failed(ex.response.data.message));
          }
        }
      }
    }
  };
};

export const AdminLoginApiCall = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(Login_Init());
      if (email && password) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/login",
          {
            email: email,
            password: password,
          }
        );
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", "Admin");
          const role = localStorage.getItem("role");
          dispatch(Login_Success(res.data.admin, res.data.token, role));
        } else {
          dispatch(Login_Failed(res.data.message));
        }
      } else {
        dispatch(Login_Failed("Email and Password are required"));
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch(Login_Failed(ex.response.data.message));
          }
        }
      }
    }
  };
};
