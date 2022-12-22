import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { UpdateMovie, UploadFile } from "../../../actions/movieAction";

const UpdateMovies = (props) => {
  const id = props.id
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tag, setTags] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const poster = movie.poster;
  const error = movie.uploadMessage;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{ float: "right" }} onClick={handleShow}>
        <input type="button" className="btn btn-warning" value="Update" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Movie Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Movie name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Release Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                placeholder="Release Year"
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
            <Form.Label style={{ color: "black" }}>Genre</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="genre"
              onChange={(e) => setGenre(e.target.value)}
            >
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
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="Tags"
                onChange={(e) => setTags(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Poster</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => dispatch(UploadFile(e))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={() => dispatch(UpdateMovie(id,name,genre,tag,poster,year))}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateMovies;
