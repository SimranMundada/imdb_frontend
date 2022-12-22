import "./Filter.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Filter = (props) => {
  return (
    <div>
      <div className="titles">Showing {props.movie.length} Movie Titles</div>
      <div className="sort">
        <label className="sortLabel">Sort By:&nbsp;</label>
        <div className="filter">
          <select>
            <option value="ranking">Ranking</option>
            <option value="rating">IMDb Rating</option>
            <option value="release">Release Year</option>
            <option value="yourRate">Your Rating</option>
          </select>
        </div>
        <div className="order">
          <span className="asc" onClick={() => props.sorting("asc")}>
            <BsArrowUp />
          </span>
          <span className="desc" onClick={() => props.sorting("desc")}>
            <BsArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
