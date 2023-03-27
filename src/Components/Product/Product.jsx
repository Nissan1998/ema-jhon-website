import React from "react";
import "./product.css";

const Product = (props) => {
  console.log(props.product);
  const { category, id, img, price, name, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Product;
