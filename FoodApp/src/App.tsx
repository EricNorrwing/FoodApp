import './App.css'
import { Recipe, Ingredient, Ratings } from './types'
import RecipeHandler from './components/RecipeHandler'
import CreateRecipePage from './pages/CreateRecipePage';


function App() {

  return (
    <>
      <div>
        <h1>Get recipes</h1>
        <ul>
          <RecipeHandler/>
          <CreateRecipePage />
        </ul>
        
      </div>
    </>
  );
}

export default App;
