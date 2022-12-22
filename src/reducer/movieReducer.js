const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        movie: action.payload,
        message: "Success",
      };
    case "ADD_MOVIES_SUCCESS":
      return {
        message: action.payload,
      };
    case "ADD_MOVIES_FAILED":
      return {
        message: action.payload,
      };
    case "UPLOAD_POSTER_SUCCESS":
      return {
        poster: action.payload.id,
        uploadMessage: action.payload.message,
      };
    case "UPLOAD_POSTER_FAILED":
      return {
        uploadMessage: action.payload.message,
      };
    case "UPDATE_MOVIE_SUCCESS":
      return {
        message: action.payload,
      };
    case "UPDATE_MOVIE_FAILED":
      return {
        message: action.payload,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        deleteMessage: action.payload,
      };
    case "DELETE_MOVIE_FAILED":
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
