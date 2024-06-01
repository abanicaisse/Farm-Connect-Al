import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../authentication/firebase";

import { products } from "../../data/products";
import { QuickCart } from "../";

import "./navbar.css";

const Navbar = ({
  cartItems,
  setCartItems,
  isLoggedIn,
  setIsLoggedIn,
  searchedProducts,
  setSearchedProducts,
}) => {
  const navigate = useNavigate();
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInput(e) {
    setSearchValue((searchValue) => (searchValue = e.target.value));

    if (searchValue === "" || searchValue === " ") {
      setSearchedProducts([]);
      return;
    }

    const productsFilteredBySearch = products.filter((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    });
    setSearchedProducts(productsFilteredBySearch);
    console.log(`Search Value: ${searchValue}`);
    console.log(searchedProducts);
  }

  const toggleCart = () => {
    setIsCartOpened(!isCartOpened);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to={"/"}>
            <img src="../../../src/assets/Logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="navbar__links">
          <a href="#about-us">About Us</a>
          <a href="#partners">Partners</a>
          <Link to={"/products"}>Products</Link>
        </div>

        <div className="navbar__login">
          <div className="navbar__login--search">
            <div
              className="navbar__login--search-cart"
              id="cart"
              onClick={toggleCart}
            >
              <img src="../../../src/assets/icons/cart-icon.svg" alt="Cart" />
              <p className="cart-count">{cartItems.length}</p>
            </div>
            <div className="navbar__login--search-search">
              <img
                src="../../../src/assets/icons/search-icon.svg"
                alt="Search"
              />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                onChange={handleSearchInput}
              />
            </div>
          </div>
          {isLoggedIn ? (
            <button className="button logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="navbar__login--login" to={"/login"}>
              Login/Register
            </Link>
          )}
        </div>
      </div>

      {isCartOpened && (
        <QuickCart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </>
  );
};

export default Navbar;
