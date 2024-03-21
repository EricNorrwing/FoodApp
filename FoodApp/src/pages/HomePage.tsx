<<<<<<< HEAD
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
=======
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage
>>>>>>> 1b0753618a2ec8dda664992a518424cdfb9e4ac5
