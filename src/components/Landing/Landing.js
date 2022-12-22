import React from "react";
import "./Landing.css";
import Content from "./Content";
import MovieCarousel from "../Carousel/MovieCarousel";

const Landing = ({ isLoggedIn }) => {
  const contents = [
    "Reviews",
    "Listings",
    "All your Favourite Movies",
    "At one place",
    "Welcome to IMDB",
  ];
  return (
    <>
      {isLoggedIn ? (
        <h1 style={{ color: "white", textAlign: "center", height: "90vh" }}>
          Welcome!!
        </h1>
      ) : (
        <div className="main-container">
          <MovieCarousel />
          <div id="sub-container">
            {contents.map((cont) => {
              return <Content content={cont} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Landing;
