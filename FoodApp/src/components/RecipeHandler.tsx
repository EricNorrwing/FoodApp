import axios from "axios";
import { useState, useEffect } from "react";
import { getURL } from "../resources/Variables";
import { Ingredient, Recipe, Ratings } from "../types";


const RecipeHandler: React.FC = () => {

  
  //To keep structure in this file
  //First imports > States > Functions > Hooks
  const [recipe, setRecipe] = useState<Recipe[]>([]);

   //Updates the recipe State everytime anyone touches setRecipe
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

  return (
    <>
    <button onClick={getRecipesFromAPI}>Fetch recipes</button>
    </>
  )
};
export default RecipeHandler;


