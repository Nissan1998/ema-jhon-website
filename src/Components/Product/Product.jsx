import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { category, id, img, price, name, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img ? img : "not Available"} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p> price $:{price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
