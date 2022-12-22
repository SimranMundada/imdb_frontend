import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMovie } from "../../../actions/movieAction";
//import { RiDeleteBin6Fill } from "react-icons/ri";
import YourRating from "../Ratings/YourRating";
import "./Movie.css";
import UpdateMovies from "./UpdateMovies";

const Movie = (props) => {
  const { id, name, year, poster, genre } = props.movie;
  const [posterUrl, setPosterUrl] = useState(
    "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI="
  );
  const dispatch = useDispatch();
  const message = useSelector((state) => state.movie);

  useEffect(() => {
    const getPoster = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2323/api/v1/upload/${poster}/base64`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res) {
          setPosterUrl(`data:image/png;base64,${res.data}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPoster();
  }, [poster, setPosterUrl]);

  return (
    <div style={{ marginTop: "5%", marginLeft: "5%" }}>
      <Card
        style={{
          width: "18rem",
          height: "550px",
          backgroundColor: "#1A1A1A",
          //border: "2px solid ",
          color: "white",
        }}
      >
        <Card.Img variant="top" src={posterUrl} height="340px" />
        <Card.Body>
          <Card.Title>
            <center>
              <div>{name}</div>
            </center>
          </Card.Title>
          <hr />
          <Card.Text>
            <p className="text-format">
              Genre: {genre}{" "}
              <span style={{ marginLeft: "35%" }}> Year: {year}</span>
            </p>
            <div className="text-format">
              <BsFillStarFill color="#FFDB58" />
              <div style={{ marginLeft: "10%", marginTop: "-7%" }}>
                <span style={{ color: "white", fontSize: "14px" }}>8.2</span>{" "}
                /10
              </div>
              <div className="rating-star">
                <YourRating movieName={name}/>
              </div>
            </div>
            <br />
            <input
              type="button"
              value="Delete"
              className="btn btn-danger"
              onClick={(e) => dispatch(DeleteMovie(id))}
            />&nbsp;&nbsp;&nbsp;
            <UpdateMovies id={id} />
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Movie;
