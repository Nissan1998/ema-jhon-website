import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveCart }) => {
  const { id, name, img, quantity, rating, price, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          price:- <span style={{ color: "orange" }}>{price}</span>
        </p>
        <p>
          Quantity:- <span style={{ color: "orange" }}>{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveCart(id)} className="delete-btn">
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
