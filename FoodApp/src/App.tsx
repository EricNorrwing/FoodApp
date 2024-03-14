import './App.css'
import { Recipe, Ingredient, Ratings } from './types'
import RecipeHandler from './components/RecipeHandler'

function App() {

  return (
    <>
      <div>
        <h1>Get recipes</h1>
        <ul>
          <RecipeHandler/>
        </ul>
        
      </div>
    </>
  );
}

export default App;
