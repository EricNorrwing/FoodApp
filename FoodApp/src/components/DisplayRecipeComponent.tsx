import { Recipe } from "../types";


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
