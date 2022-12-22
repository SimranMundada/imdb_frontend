import axios from "axios";

export const Fetch_Movie = (movie) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: movie,
  };
};

export const Upload_Failed = (message) => {
  return {
    type: "UPLOAD_POSTER_FAILED",
    payload: message,
  };
};

export const Add_Movie_Failed = (message) => {
  return {
    type: "ADD_MOVIES_FAILED",
    payload: message,
  };
};
//Get All Movie
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:2323/api/v1/movie", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res) {
        dispatch(Fetch_Movie(res.data.movie));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

//Upload Movie Poster
export const UploadFile = (e) => {
  return async (dispatch) => {
    try {
      console.log("Upload file api called");
      if (e) {
        const formData = new FormData();
        formData.append("upload", e.target.files[0]);
        const res = await axios.post(
          "http://localhost:2323/api/v1/upload",
          formData,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res.data.success) {
          if (res.data.upload) {
            dispatch({
              type: "UPLOAD_POSTER_SUCCESS",
              payload: {
                id: res.data.upload.id,
                message: res.data.message,
              },
            });
          } else {
            dispatch(Upload_Failed("Something went wrong"));
          }
        } else {
         dispatch(Upload_Failed(res.data.message));
        }
      } else {
       dispatch(Upload_Failed("All Fields are Required"));
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch(Upload_Failed(ex.response.data.message));    
          }
        }
      }
    }
  };
};

//Add new Movie
export const AddMovie = (name, genre, tags, poster, year) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      if (name && year && genre && tags && poster) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/movie",
          {
            name: name,
            genre: genre,
            tags: tags,
            poster: poster,
            year: year,
          },
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          dispatch({
            type: "ADD_MOVIES_SUCCESS",
            payload: "Movie Added Successfully!!",
          });
        } else {
          dispatch(Add_Movie_Failed(res.data.movie));
        }
      } else {
       dispatch(Add_Movie_Failed("All Fields are required"));
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
           dispatch(Add_Movie_Failed(ex.response.data.message))
          }
        }
      }
    }
  };
};
//Update Movie
export const UpdateMovie = (id, name, genre, tags, poster, year) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      if (name && year && genre && tags && poster) {
        const res = await axios.put(
          `http://localhost:2323/api/v1/movie/${id}`,
          {
            name: name,
            genre: genre,
            tags: tags,
            poster: poster,
            year: year,
          },
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );
        if (res.data.success) {
          dispatch({
            type: "UPDATE_MOVIE_SUCCESS",
            payload: "Movie Updated Successfully!!",
          });
             dispatch(fetchMovies());
        } else {
          dispatch({
            type: "UPDATE_MOVIE_FAILED",
            payload: "Something Went Wrong",
          });
        }
      } else {
        dispatch({
          type: "ADD_MOVIES_FAILED",
          payload: "All Fields are Required",
        });
      }
    } catch (ex) {
      if (ex.response) {
        if (ex.response.data) {
          if (!ex.response.data.success) {
            dispatch({
              type: "ADD_MOVIES_FAILED",
              payload: ex.response.data.message,
            });
          }
        }
      }
    }
  };
};

//Delete Movie
export const DeleteMovie = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `http://localhost:2323/api/v1/movie/${id}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res) {
        console.log(res);
        dispatch({
          type: "DELETE_MOVIE_SUCCESS",
          payload: "Movie Deleted",
        });
        dispatch(fetchMovies())
      } else {
        dispatch({
          type: "DELETE_MOVIE_FAILED",
          payload: "Something Went Wrong!!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
