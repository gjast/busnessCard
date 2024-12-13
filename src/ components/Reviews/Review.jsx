import React, { useState } from "react";
import "./Review.scss";

export default function Review({ stars, img }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="Review">
		<img className="Review_img" src={img}/>
      <div className="rating">
        {[...Array(stars)].map((index) => {
          const starValue = stars - index;
          return <label key={starValue}>&#9733;</label>;
        })}
      </div>
    </div>
  );
}
