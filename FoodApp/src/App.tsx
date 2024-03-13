import { useEffect, useState } from 'react'
import './App.css'
import { getRequestRecipe } from './components/GetRequestRecipe'
import { Recipe, Ingredient, Ratings } from './types'

function App() {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  //TODO  REMOVE THIS WHEN WE MAKE A MODULAR APPROACH INSTEAD OF ALWAYS RENDERING
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRecipe = await getRequestRecipe();
        setRecipe(fetchedRecipe); //This throws an warning because it doesnt know what its fetching
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div>
        <h1>Get Button below</h1>
        <ul>
          <button onClick={getRequestRecipe}>Testing get</button>
          {recipe.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))} 
        </ul>
        {/* Remove this when component for recipe list is built  */}
      </div>
    </>
  );
}

export default App;
