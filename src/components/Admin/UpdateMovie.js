import { useState } from "react";
import "./UpdateMovie.css";

const UpdateMovie = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tag, setTags] = useState("");
  // const [poster, setPoster] = useState("");
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Update Movie</h3>
          <div className="form-group-signin">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control "
              placeholder="Enter Movie Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-signin">
            <label>Launch Year</label>
            <input
              type="text"
              name="year"
              className="form-control "
              placeholder="Enter Launch Year"
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div
            className="form-group-signin"
            onChange={(e) => setGenre(e.target.value)}
          >
            <label>Genre</label>
            <select className="form-select" name="genre">
              <option value=" ">Choose Genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
              <option value="horror">Horror</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="adventure">Adventure</option>
              <option value="crime">Crime</option>
              <option value="historical">Historical</option>
              <option value="romance">Romance</option>
              <option value="romcom">Rom-Com</option>
            </select>
          </div>
          <div className="form-group-signin">
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              placeholder="Enter Tags"
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>
          <div className="form-group-signin">
            <label>Poster</label>
            <input
              type="file"
              className="form-control form-control-sm"
              name="poster"
            />
          </div>
          <div className="form-group-signin d-grid gap-2 ">
            <input
              type="button"
              className="btn btn-outline-warning"
              value="Update"
              name="update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateMovie;
