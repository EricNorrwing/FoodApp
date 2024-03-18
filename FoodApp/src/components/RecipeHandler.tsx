import axios from "axios";
import { useState, useEffect } from "react";
import { getURL } from "../resources/Variables";
import { Ingredient, Recipe, Ratings } from "../types";
import RecipeComponent from "./RecipeComponent";


const RecipeHandler: React.FC = () => {

  

  //To keep structure in this file
  //First imports > States > Functions > Hooks
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  const findRecipeById = (recipe: Recipe[], id:string) => {
    return recipe.find((recipeObj) => recipeObj._id === id);
  }

  const singleRecipe = findRecipeById(recipe,"65dcc7aea997d20ee1ac76eb" )

  //Gets all Recipes and returns the data
  const getRecipesFromAPI = async () => {
    try {
      const swaggerURL = getURL();
      const response = await axios.get<Recipe[]>(`${swaggerURL}/recipes`);

      if (response.status === 200) {
        console.log("Recipes successfully fetched: ", response.data);
        setRecipe(response.data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  };


  function checker() {
    //Creates a "are you sure window"
    const result = confirm('Are you sure you want to delete this recipe?')
    if (result == true){
      //if we confirm go to detele function
      deleteRecipes()
    }
  }

  const deleteRecipes = async () => {

    const swaggerURL = getURL();
    //currently using the "real id" (no props to work from )  
    const response = await axios.delete(`${swaggerURL}/recipes/65f839fda6ed75820044dd7b`)
  
    if(response.status === 200) {
      console.log("Recipe Removed")
    }
  }

 
  //Runs once on app start
  useEffect(() => {
    getRecipesFromAPI();
  }, []
  )

  return (
    <>
    <button onClick={getRecipesFromAPI}>Fetch recipes</button>
      {/* This displays an individual recipe based on the singleRecipe object that is defined above */}
      {singleRecipe && <RecipeComponent recipe={singleRecipe} />}
      <button onClick={checker}>Delete button</button>
      
    
    </>
  )
};
export default RecipeHandler;


