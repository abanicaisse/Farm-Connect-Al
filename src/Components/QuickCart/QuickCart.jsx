import React from "react";

import "./quick-cart.css";

import { products } from "../../data/products";
import { Link } from "react-router-dom";

// cart takes as props a specific product added to the cart
const QuickCart = ({ cartItems, setCartItems }) => {
  return (
    <div className="cart">
      {cartItems.length == 0 ? (
        <>
          <div className="cart__empty">
            <h1>Cart is empty</h1>
            <p>add some items to the cart</p>
          </div>
        </>
      ) : (
        <>
          {cartItems.map((item, index) => {
            return (
              <div className="cart__product" key={index}>
                <img
                  className="s-btn"
                  src="../../../src/assets/icons/cancel.svg"
                  alt="remove"
                />
                <div className="cart__product--detail">
                  <div>
                    <img src={item.img} alt="Product" />
                  </div>

                  <div>
                    <p className="name">{item.name}</p>
                    <p className="price">{"Ugx " + item.price}</p>
                  </div>
                </div>

                <div>
                  <img
                    className="s-btn"
                    src="../../../src/assets/icons/minus-icon.svg"
                    alt="minus"
                  />
                  <p>1</p>
                  <img
                    className="s-btn"
                    src="../../../src/assets/icons/plus-icon.svg"
                    alt="plus"
                  />
                </div>
              </div>
            );
          })}
          <div className="cart__go-checkout">
            <Link to={"/checkout"}>Checkout</Link>
          </div>

          <div className="white-btn cart__view-full-cart ">
            <Link to={"/cart"}>View Cart</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default QuickCart;
