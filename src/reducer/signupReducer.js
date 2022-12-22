const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        message: action.payload,
      };
    case "SIGNUP_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
