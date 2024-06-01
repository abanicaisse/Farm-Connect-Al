import { React, useEffect } from "react";

import { products } from "../../data/products";

import "./product.css";

const Product = ({
  img,
  price,
  productName,
  productIndex,
  productList,
  cartItems,
  setCartItems,
}) => {
  const addProductToCart = () => {
    if (cartItems.includes(productList[productIndex])) {
      return;
    } else {
      // cartItems.push(productList[productIndex]);
      setCartItems((cartItems) => [...cartItems, productList[productIndex]]);
      localStorage.setItem("cartItems", cartItems.length);
    }

    console.log(cartItems);
  };

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={img} alt="Product" />
      </div>
      {/* <div className="product-img-container"> */}
      {/* </div> */}
      <div className="product__detail">
        <div>
          <p className="price">Ugx {price}</p>
          <p>{productName}</p>
        </div>
        <div className="s-btn add-to-cart" onClick={addProductToCart}>
          <img src="../../../src/assets/icons/plus-icon.svg" alt="add" />
        </div>
      </div>
    </div>
  );
};

export default Product;
