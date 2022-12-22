import { useState } from "react";
import "./MovieList.css";
import Movies from "../BootstrapData/index";
import { BsFillStarFill, BsBookmarkStar } from "react-icons/bs";
import YourRating from "./Ratings/YourRating";
import Filter from "./Filter";
import { Link } from "react-router-dom"
import useCurrentUser from "../../hooks/useCurrentUser";

const MovieList = () => {

  const [sortType, setSortType] = useState("asc");
  // const [movie1, setMovie1] = useState([]);
  const movie = Movies.movies.list;
  const user = useCurrentUser();
  console.log(user);
 

  const sorting = (order) => {
    setSortType(order)
  };

  const res = movie.sort((a, b) => {
      if (sortType === "asc") {
        return parseInt(a.rank) - parseInt(b.rank);
      } else if (sortType === "desc") {
        return parseInt(b.rank) - parseInt(a.rank);
    }
    return null
    });
  
  return (
    <div>
      {user &&
        <div className="main-container1">
          <div className="movie-list">
            <h3 className="title">Movie Charts</h3>
            <Filter movie={res} sorting={sorting} />
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col" className="img-cell"></th>
                  <th scope="col" className="rank">
                    Rank & Title
                  </th>
                  <th scope="col" className="imdbRating">
                    IMDB Rating
                  </th>
                  <th scope="col" className="yourRating">
                    Your Rating
                  </th>
                  <th scope="col" className="wishlist">
                    WatchList
                  </th>
                </tr>
              </thead>
              <tbody>
                {res.map((movie, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <img src={movie.posterUrl} alt="poster" />
                      </th>
                      <td className="movieTitle">
                        {movie.rank}.
                        <span className="movieTitle">
                          <Link
                            to={`/user/movie/details/${movie.name}`}
                            state={{ movieName: movie.name }}
                          >
                            {movie.name}
                          </Link>
                        </span>
                        ({movie.year})
                      </td>
                      <td>
                        <div className="imdb-rating">
                          <BsFillStarFill />
                          <div className="rating">{movie.rating}</div>
                        </div>
                      </td>
                      <td>
                        <YourRating
                          movieName={movie.name}
                        />
                      </td>
                      <td>
                        <div className="watchList">
                          <BsBookmarkStar />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>}
      </div>
    );
}


export default MovieList;
