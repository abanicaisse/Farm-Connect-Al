import React from "react";

import { Navbar, Footer, Product } from "../../Components";

import "./checkout.css";

const Checkout = ({
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
        <div className="checkout">
          <h1>Checkout page</h1>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Checkout;
