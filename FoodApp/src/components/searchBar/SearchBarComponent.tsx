import React from 'react'
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";



const SearchBarComponent = () => {
    const [results, setResults] = useState([]);

    return (
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
  );
}


export default SearchBarComponent