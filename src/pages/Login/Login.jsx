import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../authentication/firebase";

import { Navbar, Footer, Product } from "../../Components";

import "./login.css";

const Login = ({
  cartItems,
  setCartItems,
  isLoggedIn,
  setIsLoggedIn,
  searchedProducts,
  setSearchedProducts,
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
        <div className="login">
          <h1>Login</h1>
          <form action="">
            <input
              type="email"
              name="user-email"
              id="user-email"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="orange-btn" onClick={onLogin}>
              Login
            </button>

            <div className="white-btn">
              <Link to={"/register"}>Don't have an account? (Register) </Link>
            </div>
          </form>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Login;
