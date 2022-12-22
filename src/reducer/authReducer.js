const initialState = {
  user: null,
  loading: false,
  message: " ",
  error: null,
  token: null,
  role:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_INIT":
      return {
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        loading: false,
        user: action.payload.data,
        token: action.payload.token,
        role: action.payload.role,
        message: "Log in Successful",
      };
    case "LOGIN_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
