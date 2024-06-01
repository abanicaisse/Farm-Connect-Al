import { React, useState } from "react";

import { Link } from "react-router-dom";

import {
  AboutUs,
  QuickCart,
  FeaturedProducts,
  Product,
  Footer,
  Navbar,
  Partners,
} from "../../Components";

import "./home.css";

const Home = ({
  cartItems,
  setCartItems,
  isLoggedIn,
  setIsLoggedIn,
  searchedProducts,
  setSearchedProducts,
}) => {
  return (
    <div className="home">
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
        // console.log("display searched products");
        <>
          <div className="home__hero-container">
            <div className="home__hero">
              <div className="home__hero--text">
                <h1>Farm-Connect</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link className="button" to={"/products"}>
                  Our Products
                </Link>
              </div>
            </div>
          </div>

          <FeaturedProducts cartItems={cartItems} setCartItems={setCartItems} />

          <AboutUs />

          <Partners />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
