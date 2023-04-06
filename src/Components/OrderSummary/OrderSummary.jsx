import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderSUmmary.css";
import { removeFromDb } from "../../utilities/fakedb";

const OrderSummary = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderSummary;
