import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card-wrapper">
      <img src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
      <h6>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </h6>
      <button className="btn">Add to Cart</button>
    </div>
  );
}
export default Card;
