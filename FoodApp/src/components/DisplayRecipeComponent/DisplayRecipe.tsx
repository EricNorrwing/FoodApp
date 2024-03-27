import { useEffect, useState } from "react";
import useRecipeState from "../../states/StateManager";
import { Recipe, Ratings, Ingredient } from "../../types";
import { getURL } from "../../resources/Variables";
import axios from "axios";
import "./DisplayRecipe.css"
import InputTextFieldComponent from "../InputFields/InputTextFieldComponent";
import EditTitleComponent from "./EditModeFields/EditTitlecomponent";

interface RecipeComponentProps {
  id:string;
}

const DisplayRecipe = ({ id }: RecipeComponentProps) => {
  const swaggerURL = getURL();
  const [recipe, setRecipe] = useState<Recipe>();
  const globalState = useRecipeState();
  const [editingRecipe, setEditingRecipe] = useState<boolean>(false)
  

  


  const getRecipe = async () => {
    try {
    const response = await axios.get(`${swaggerURL}/recipes/${id}`)
    setRecipe(response.data); 
    console.log(recipe)
    } catch (error) {
      console.error("Unable to fetch recipe: ", error)
    }
  }

  const handleDelete = (id: string) => {
    if(confirm("Are you sure you want to delete this recipe?")){
      globalState.deleteRecipe(id)
    } 
    //TODO Navigate back to something
  }


   //This function might not revert upon rerender, test
   const editingMode = () => {
    setEditingRecipe(!editingRecipe)
    console.log(editingRecipe)
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe!,
      title: value,
    }));
  };




  useEffect(() => {
    getRecipe();
  }, [id]);

  useEffect(() => {
    getRecipe();
  }, []);

  
  return (
    <div className="recipe-component-wrapper">
      {recipe && (
        <><form>
          <EditTitleComponent mode={editingRecipe} value={recipe.title} handleChange={handleChange} />
          
          </form>
          {/* needs mapping later */}
          <div className="Categories">{recipe.categories}</div>
          <div className= "TimeInMins">{recipe.timeInMins}</div>
          <div className = "Image-wrapper">
            <img src={recipe.imageUrl} alt={recipe.title} /></div>
          <div className="Description">{recipe.description}</div>
          <div className="Ingredients-List-Wrapper">
            <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}, {ingredient.amount}, {ingredient.unit}
              </li>
            ))}
            </ul>
          </div>
          <div className="Instruction-List-Wrapper">
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          {/* <p>{recipe.ratings}</p> */}
          <button onClick={() => handleDelete(id)}>DELETE THIS RECIPE</button>
          {editingRecipe ? (
            // <button onClick={()=> updateRecipe()}>Update recipe</button>
            <button onClick={()=> editingMode()}>Disable Edit Mode</button>
          ):(
            <button onClick={()=> editingMode()}>Enable Edit Mode</button>
          )}
          
         
          {/* <p>Comments Map here :)</p> */}
        </>
      )}
    </div>
  );
};

export default DisplayRecipe;
