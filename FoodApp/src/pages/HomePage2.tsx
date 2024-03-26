/* 
import { useState } from "react";

import { SearchBar } from "../components/searchbar/SearchBar";
import { SearchResultsList } from "../components/searchbar/SearchResultsList";
function App() {
  const [results, setResults] = useState([]);
=======

import { useState } from "react";

import { SearchBar } from "../components/searchBar/SearchBar";
import { SearchResultsList } from "../components/searchBar/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;

import React from 'react'


  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}


export default App;
export default HomePage

 */
