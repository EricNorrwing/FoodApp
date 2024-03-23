import './App.css'
import { Recipe, Ingredient, Ratings } from './types'
import CreateRecipePage from './pages/CreateRecipePage';
import RecipeComponent from './components/DisplayRecipeComponent';
import useRecipeState from './states/StateManager';
import IngredientTypeSelector from './components/ingredientTypeSelector/IngredientTypeSelector';
import { useState } from 'react';
import Footer from './components/footer/Footer';


function App() {
  const [IngredinetType, setIngredientType] = useState("");

  const handleIngredientTypeChange = (newString: string) => {
    setIngredientType(newString);
  };
  console.log(IngredinetType)


  return (
    <>
      <div>
        <h1>Recipie creation</h1>
        <IngredientTypeSelector onTypeStringChange={handleIngredientTypeChange} />
        <ul>
        <button onClick={useRecipeState.getState().getRecipesFromAPI}>Fetch recipes</button>
          <CreateRecipePage />
        </ul> 
        <Footer />
      </div>
      
    </>
    
  );
};

export default App;
