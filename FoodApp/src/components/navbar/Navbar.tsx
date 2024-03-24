import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/flavorfiesta-high-resolution-logo-black-transparent.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="FlavorFiesta Logo Black" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>{" "}
        </li>
        <li
          onClick={() => setMenu("recipes")}
          className={menu === "recipes" ? "active" : ""}
        >
          <Link to="/recipes">Recipes</Link>{" "}
        </li>
        <li
          onClick={() => setMenu("cocktails")}
          className={menu === "cocktails" ? "active" : ""}
        >
          <Link to="/cocktails">Cocktails</Link>{" "}
        </li>
        <li
          onClick={() => setMenu("about-us")}
          className={menu === "about-us" ? "active" : ""}
        >
          <Link to="/about-us">About Us</Link>{" "}
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/search">
          <img src={search_icon} alt="" />
        </Link>
        <Link to="/basket">
          <div className="navbar-search-icon">
            <img src={basket_icon} alt="" />
            <div className="dot"></div>
          </div>
        </Link>
        <Link to="/sign-in">
          <button>sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
