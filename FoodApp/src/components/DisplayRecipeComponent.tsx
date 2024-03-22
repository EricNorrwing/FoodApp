/*import { Recipe } from "../types";


interface RecipeComponentProps {
  recipe: Recipe;
}

const DisplayRecipeComponent = ({ recipe }: RecipeComponentProps) => {
  return (
    <div className="recipe-component">
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <p>{recipe.categories}</p>
    </div>
  );
};

export default DisplayRecipeComponent;
*/


import { Recipe } from "../types";
import { useNavigate } from "react-router-dom";


interface RecipeComponentProps {
  recipe: Recipe;
}

const DisplayRecipeComponent = ({ recipe }: RecipeComponentProps) => {

  const navigate = useNavigate();

  return (
    <div className="recipe-component">
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p onClick={() =>
          navigate("/recipe/", { //Om användaren klickar på titeln, kommer användare navigera till "/todo"
            state: recipe, // todoProp skickas med till den komponenten med router"/todo"" genom state-attributet från navigate
          })
        }
      >
        {recipe.description}</p>
      <p>{recipe.instructions}</p>
      <p>{recipe.categories}</p>
    </div>
  );
};

export default DisplayRecipeComponent;