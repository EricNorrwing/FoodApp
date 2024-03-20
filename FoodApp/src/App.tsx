import './App.css'
import { Recipe, Ingredient, Ratings } from './types'
import CreateRecipePage from './pages/CreateRecipePage';
import RecipeComponent from './components/DisplayRecipeComponent';
import useRecipeState from './states/StateManager';


function App() {

  return (
    <>
      <div>
        <h1>Get recipes</h1>
        <ul>
        <button onClick={useRecipeState.getState().getRecipesFromAPI}>Fetch recipes</button>
          <CreateRecipePage />
        </ul> 
      </div>
    </>
  );
}

export default App;
