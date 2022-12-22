import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../actions/movieAction";

const MovieCard = () => {
  const [movie, setMovie] = useState([]);
  // const [deleted, setDeleted] = useState([false]);
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.movie.movie);
  if (Array.isArray(temp) && temp !== movie) {
    setMovie(temp);
  }
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <div>
      <Row>
        {movie.map((m, i) => {
          return (
            <>
              <Col>
                <Movie movie={m} />
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default MovieCard;
