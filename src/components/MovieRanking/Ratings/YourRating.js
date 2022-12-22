import "./YourRating.css";
import { BsStar } from "react-icons/bs";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Rating } from "react-simple-star-rating";

const YourRating = ({movieName }) => {
  const [show, setShow] = useState(false);
   const [rating, setRating] = useState(0);

   // Catch Rating value
   const handleRating = () => {
     console.log("Rating is ", rating);
   };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onPointerMove = (value, index) => setRating(value);
  return (
    <>
      <div className="giveRating" onClick={handleShow}>
        <BsStar fontSize="18px" />
        {/* {rating}
        how to display zero after decimal point ?? */}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate The Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{movieName}</h3>
          {/* <StarRating /> */}
          <Rating
            onClick={handleRating}
            onPointerMove={onPointerMove}
            iconsCount={10}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default YourRating;
