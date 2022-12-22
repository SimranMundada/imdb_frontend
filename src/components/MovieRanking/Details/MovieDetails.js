import React from "react";
import "./MovieDetails.css";
import { BsFillStarFill } from "react-icons/bs";
import YourRating from "../Ratings/YourRating";
// import movie1 from "../../MovieImages/NineTailed.jpg";
import Movies from "../../BootstrapData/index";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const params = useLocation();
  // console.log(params.state);

  useEffect(() => {
    const result = Movies.movies.list.filter(
      (movie) =>
        movie.name.toLowerCase() === params.state.movieName.toLowerCase()
    );
    setMovie(result || Movies.movies.list);
  }, [params]);

  return (
    <div>
      {movie.length > 0 &&
        movie.map((movie, i) => {
          return (
            <>
              <div className="info">
                <div className="bar"></div>
                <div className="movie-name">
                  <h2>{movie.name}</h2>
                </div>

                <div className="rating-details">
                  IMDB Rating
                  <div>
                    <BsFillStarFill color="#f5c518" fontSize={"25px"} />
                    <div
                      style={{
                        marginLeft: "25px",
                        marginTop: "-25px",
                        fontSize: "18px",
                      }}
                    >
                      &nbsp;{movie.rating}/10
                    </div>
                  </div>
                </div>
                <div className="your-details">
                  Your Rate
                  <div
                    style={{
                      color: "Blue",
                      marginTop: "-5px",
                      marginLeft: "-30px",
                    }}
                  >
                    <YourRating />
                    <div
                      style={{
                        marginLeft: "60px",
                        marginTop: "-27px",
                        fontSize: "18px",
                      }}
                    >
                      Rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="movie-poster">
                  <img
                    src={movie.imageUrl}
                    alt="movie poster"
                    height={"400px"}
                    width={"250px"}
                    style={{
                      border: "1px solid #ffffffB3",
                      borderRadius: "2%",
                    }}
                  />
                </div>
                <div className="other-details">
                  <hr />
                  <div className="description">
                    Description: {movie.description}
                  </div>
                  <hr />
                  <div className="creator">Creator: {movie.creator}</div>
                  <hr />
                  <div className="genre">
                    Genre:{" "}
                    {movie.tags.map((tag, i) => {
                      return <>{tag}&nbsp;</>;
                    })}
                  </div>
                  <hr />
                  <div className="genre">Release year: {movie.year}</div>
                  <hr />
                </div>
              </div>
            </>
          );
        })}
      {/* <div className="info">
        <div className="bar"></div>
        <div className="movie-name">
          <h2>{movie[0].name}</h2>
        </div>

        <div className="rating-details">
          IMDB Rating
          <div>
            <BsFillStarFill color="#f5c518" fontSize={"25px"} />
            <div
              style={{
                marginLeft: "25px",
                marginTop: "-25px",
                fontSize: "18px",
              }}
            >
              &nbsp;{movie[0].rating}/10
            </div>
          </div>
        </div>
        <div className="your-details">
          Your Rate
          <div
            style={{ color: "Blue", marginTop: "-5px", marginLeft: "-30px" }}
          >
            <YourRating />
            <div
              style={{
                marginLeft: "60px",
                marginTop: "-27px",
                fontSize: "18px",
              }}
            >
              Rate
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div
          className="movie-poster"
        >
          <img src={movie[0].imageUrl} alt="movie poster" height={"400px"} />
        </div>
        <div className="other-details">
          <hr/>
          <div className="description">Description: {movie[0].description}</div>
          <hr />
          <div className="creator">Creator: {movie[0].creator}</div>
          <hr />
          <div className="genre">Genre: {movie[0].tags[0]}</div>
          <hr />
          <div className="genre">Release year: {movie[0].year}</div>
          <hr />
        </div>
      </div> */}
    </div>
  );
};

export default MovieDetails;
