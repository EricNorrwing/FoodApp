import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import useRecipeState from "../../states/StateManager";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const URL = "https://sti-java-grupp1-5znlnp.reky.se";
  const recipeState = useRecipeState();

  const fetchData = (value) => {
    fetch(`${URL}/recipes`)
      .then((response) => response.json())
      .then((json) => {
        const lowerCaseValue = value.toLowerCase();
        const results = json.filter((recipe) => {
          return (
            value &&
            recipe &&
            recipe.title.toLowerCase().includes(lowerCaseValue)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
