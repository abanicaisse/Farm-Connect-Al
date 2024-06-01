import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Footer, Product } from "../../Components";

import "./cart.css";

const Cart = ({
  cartItems,
  setCartItems,
  isLoggedIn,
  setIsLoggedIn,
  searchedProducts,
  setSearchedProducts,
}) => {
  return (
    <>
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        searchedProducts={searchedProducts}
        setSearchedProducts={setSearchedProducts}
      />

      {searchedProducts.length !== 0 ? (
        <div className="searched-products featured">
          <h2>Matching Products...</h2>

          <div className="products__listing">
            {searchedProducts.map((product, index, array) => {
              return (
                <Product
                  key={index}
                  productIndex={index}
                  productList={array}
                  img={product.img}
                  productName={product.name}
                  price={product.price}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="full-cart">
          {cartItems.length == 0 ? (
            <>
              <div className="full-cart__empty">
                <div>
                  <img
                    src="../../../src/assets/icons/empty-cart.svg"
                    alt="cart"
                  />
                </div>
                <h1>Cart is empty</h1>
                <p>Add some items to the cart</p>
                <Link className="button" to={"/products"}>
                  View All Products
                </Link>
              </div>
            </>
          ) : (
            <>
              {cartItems.map((item, index) => {
                return (
                  <div key={"#01"} className="full-cart__summary">
                    <div className="full-cart__product" key={index}>
                      <div className="full-cart__product--detail">
                        <div>
                          <img src={item.img} alt="Product" />
                        </div>
                        <p className="name">{item.name}</p>
                      </div>
                      <div className="full-cart__product--increment">
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
                      <div className="full-cart__product--price">
                        <p className="price">{"Ugx " + item.price}</p>
                      </div>
                      <img
                        className="s-btn"
                        src="../../../src/assets/icons/cancel.svg"
                        alt="remove"
                      />
                      <p className="button">Remove from Cart</p>
                    </div>
                  </div>
                );
              })}
              <div className="full-cart__subtotal">
                <div className="full-cart__subtotal--empty"></div>
                <div className="full-cart__subtotal--text">
                  <p>Subtotal</p>
                </div>
                <div className="full-cart__subtotal--price">
                  <p className="price">{"Ugx: Total "}</p>
                </div>
                <Link to={"/checkout"} className="button">
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;
