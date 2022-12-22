import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  // const [value, setValue] = useState(0);

  // Catch Rating value
  const handleRating = () => {
    console.log("Rating is ", rating);
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => setRating(value);

  return (
    <div>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        iconsCount={10}
        /* Available Props */
      />
    </div>
  );
}
