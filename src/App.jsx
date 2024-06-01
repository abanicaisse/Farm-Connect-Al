import { React, useState, useEffect } from "react";

import { Route, Routes, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./authentication/firebase";

import { Home, Login, Register, Products, Checkout, Cart } from "./pages";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(localStorage.getItem("isLoggedIn") || false)
  );

  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);

        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              searchedProducts={searchedProducts}
              setSearchedProducts={setSearchedProducts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
