import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-ff-white-transparent.png";
import { SearchBar } from "../searchbar/SearchBar";
import { SearchResultsList } from "../searchbar/SearchResultsList";

const Header = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Recipe App Logo" />
          </Link>
        </div>
        <div className="App">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>{" "}
            </li>
            <li>
              <Link to="/cocktails">Cocktails</Link>{" "}
            </li>
            <li>
              <Link to="/about-us">About Us</Link>{" "}
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
