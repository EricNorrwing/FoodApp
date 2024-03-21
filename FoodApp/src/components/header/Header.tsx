import { Link } from "react-router-dom";
import "./Header.css";
/* import { SearchBar } from "../searchbar/SearchBar"; */
import logo from "../../assets/logo-ff-white-transparent.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Recipe App Logo" />
          </Link>
        </div>
        {/* <SearchBar /> */}
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>{" "}
            </li>
            <li>
              <Link to="/create-recipe">Create Your Own Recipe</Link>{" "}
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
