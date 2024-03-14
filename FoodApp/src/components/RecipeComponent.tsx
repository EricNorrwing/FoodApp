import { Recipe } from "../types";
import RecipeHandler from "./RecipeHandler";

interface RecipeComponentProps {
  recipe: Recipe;
}

const RecipeComponent = ({
  recipe,
  //handleDelete,
}: RecipeComponentProps) => {
  return (
    <div className="recipe-component">
      
   
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      
     
    </div>
  );
};

export default RecipeComponent;
