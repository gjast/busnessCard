import React from "react";
import "./CardAbout.scss";

export default function CardAbout({ link, title, img, price }) {
  return (
    <div className="CardAbout">
      <a href={link}>
        <img src={img} alt={title} />
      </a>
      <div className="CardAbout_text">
        <h3 className="CardAbout_title">{title}</h3>
        <p className="CardAbout_price">{price}</p>
      </div>
    </div>
  );
}
