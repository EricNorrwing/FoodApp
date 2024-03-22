import { useState } from "react";

import { SearchBar } from "../components/searchbar/SearchBar";
import { SearchResultsList } from "../components/searchbar/SearchResultsList";
import useRecipeState from "../states/StateManager";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <button onClick={useRecipeState.getState().getRecipesFromAPI}>Click me please</button>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
}

export default App;
