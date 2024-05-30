import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  function handleOnClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleOnMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleOMouseMove() {
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map(( _ , index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleOnClick(index)}
              onMouseMove={() => handleOnMouseEnter(index)}
              onMouseLeave={() => handleOMouseMove()}
              size={80}
            />
          );
        })}
      </div>
    </>
  );
}
