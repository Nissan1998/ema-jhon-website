import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const roundTax = Math.round(tax);
  const grandTotal = Math.round(total + totalShipping + tax);
  return (
    <div>
      <div className="cart-container">
        <h3 style={{ textAlign: "center" }}>Order summary </h3>
        <p>selected items:-{cart.length}</p>
        <p>Total Price:-${total}</p>
        <p>Total Shipping Charge:- ${totalShipping} </p>
        <p>Tax:- ${roundTax}</p>
        <h6 style={{ fontSize: 16 }}>Grand Total: ${grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;
