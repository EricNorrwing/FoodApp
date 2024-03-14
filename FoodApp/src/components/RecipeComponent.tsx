import { Recipe } from "../types";

interface RecipeComponentProps {
  recipe: Recipe;
  handleDelete: (id: string) => Promise<void>;
}

const RecipeComponent = ({
  recipe,
  //handleDelete,
}: RecipeComponentProps) => {
  return (
    <div className="recipe-component">
   
      <p>{recipe.title}</p>
      <img src={recipe.imageUrl} alt={recipe.title} />
      {/* <p className="recipe-delete" onClick={() => handleDelete(recipe._id)}>
        X Delete
      </p> */}
    </div>
  );
};

export default RecipeComponent;
