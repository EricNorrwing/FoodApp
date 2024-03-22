import { useState } from "react";

import { SearchBar } from "../components/searchbar/SearchBar";
import { SearchResultsList } from "../components/searchbar/SearchResultsList";
import CreateRecipeSection from "../components/homePageSection/CreateRecipeSection";
function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
      </div>
      <CreateRecipeSection />
    </>
  );
}

export default App;
