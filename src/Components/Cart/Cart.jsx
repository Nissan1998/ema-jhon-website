import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const roundTax = Math.round(tax);
  const grandTotal = Math.round(total + totalShipping + tax);
  return (
    <div>
      <div className="cart-container">
        <h3 style={{ textAlign: "center" }}>Order summary </h3>
        <p>selected items:-{quantity}</p>
        <p>Total Price:-${total}</p>
        <p>Total Shipping Charge:- ${totalShipping} </p>
        <p>Tax:- ${roundTax}</p>
        <h6 style={{ fontSize: 16 }}>Grand Total: ${grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;
