/*import './App.css'
import { Recipe, Ingredient, Ratings } from './types'
import CreateRecipePage from './pages/CreateRecipePage';
import RecipeComponent from './components/DisplayRecipeComponent';
import useRecipeState from './states/StateManager';
import IngredientTypeSelector from './components/ingredientTypeSelector/IngredientTypeSelector';
import { useState } from 'react';


function App() {
  const [IngredinetType, setIngredientType] = useState("");

  const handleIngredientTypeChange = (newString: string) => {
    setIngredientType(newString);
  };
  console.log(IngredinetType)


  return (
    <>
      <div>
        <h1>Get recipes</h1>
        <IngredientTypeSelector onTypeStringChange={handleIngredientTypeChange} />
        <ul>
        <button onClick={useRecipeState.getState().getRecipesFromAPI}>Fetch recipes</button>
          <CreateRecipePage />
        </ul> 
      </div>
    </>
  );
};

export default App;

*/
import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar"
import { SearchResultsList } from "./components/searchBar/SearchResultsList";

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