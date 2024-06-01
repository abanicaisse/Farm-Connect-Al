import { React, useState } from "react";

import { Navbar, Footer, Product, FeaturedProducts } from "../../Components";

import { products } from "../../data/products";

import "./products.css";

const Products = ({
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
        <div className="products">
          <div className="products__sidebar">
            <div>
              <img
                src="../../../src/assets/icons/filter-icon.svg"
                alt="filter"
              />
              <p>Filter</p>
            </div>
            <div className="products__filters products__sidebar--brands">
              <h2>Brands</h2>
              <div>
                <p>Arya</p>
                <p>Asya</p>
                <p>7Up</p>
                <p>Walmart</p>
                <p>Congo</p>
              </div>
            </div>
            <div className="products__filters products__sidebar--category">
              <h2>Category</h2>
              <div>
                <p>Rices</p>
                <p>Eggs</p>
                <p>Drinks</p>
                <p>Fruits</p>
                <p>Other</p>
              </div>
            </div>
            <div className="products__filters products__sidebar--price">
              <h2>Price</h2>
              <div>
                <p>Ugx 10000</p>
                <p>Ugx 20000</p>
                <p>Ugx 30000</p>
                <p>Ugx 40000</p>
                <p>Ugx 50000</p>
              </div>
            </div>
          </div>

          <div className="products__listing">
            {products.map((product, index, array) => {
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
      )}

      <Footer />
    </>
  );
};

export default Products;
