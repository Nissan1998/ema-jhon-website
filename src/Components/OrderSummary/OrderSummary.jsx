import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderSUmmary.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OrderSummary = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCartAll = () => {
    setCart([]);
    deleteShoppingCart();
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
        <Cart cart={cart} handleClearCartAll={handleClearCartAll}>
          <Link to="/checkout">
            <button className="btn-proceeds">
              Proceed Checkout
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderSummary;
