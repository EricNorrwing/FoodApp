import { useState } from "react";
import { Recipe, Ingredient, Ratings } from '../types'
import axios from "axios";

const CreateRecipePage = () => {
const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [addRecipeTitle, setAddRecipeTitle] = useState("");
  const [addRecipeDescription, setAddRecipeDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [time, setTime] = useState<number>();
  const [categories, setCategories] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState<number>(0);
  const [ingredientUnit, setIngredientUnit] = useState("");


  const addIngredient = () => {
    const newIngredient: Ingredient = {
      name: ingredientName,
      amount: Number(ingredientAmount),
      unit: ingredientUnit,
    };

    setIngredients([...ingredients, newIngredient]);

  };

  const addRecipe = () => {
    const originalRecipes = [...recipes];
    const categoryArray = categories
      .split(",")
      .map((category) => category.trim());
    const instructionArray = instructions
      .split(",")
      .map((instruction) => instruction.trim());

    const newIngredient = {
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
    };

    const newRecipe = {
      title: addRecipeTitle,
      description: addRecipeDescription,
      imageUrl: imgUrl,
      timeInMins: time,
      categories: categoryArray,
      instructions: instructionArray,
      ingredients: newIngredient,
    };

    setRecipes([newRecipe, ...recipes]);

    setIngredients([]);


    axios
      .post(`https://sti-java-grupp1-5znlnp.reky.se/recipes`, newRecipe)
      .then(({ data: savedRecipe }) => setRecipes([...savedRecipe, ...recipes]))
      .catch((error) => {
        console.error(error);
        setRecipes(originalRecipes);
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={addRecipeTitle}
          onChange={(eventTitle) => setAddRecipeTitle(eventTitle.target.value)}
          placeholder="title: string"
        />
        <input
          type="text"
          value={addRecipeDescription}
          onChange={(e) => setAddRecipeDescription(e.target.value)}
          placeholder="description: string"
        />
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="ImageUR: string"
        />
        <input
          type="text"
          value={time || ""}
          onChange={(e) => setTime(Number(e.target.value))}
          placeholder="timeInMins: number"
        />
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          placeholder="categories: [str] comma seperated"
        />
        <input
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="instructions: [str] comma seperated"
        />
        <h3>Ingredient</h3>
        <input
          type="text"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
          placeholder="Ingredient Name: string"
        />
        <input
          type="text"
          value={ingredientAmount}
          onChange={(e) => setIngredientAmount(Number(e.target.value))}
          placeholder="Ingredient Amount: Number"
        />
        <input
          type="text"
          value={ingredientUnit}
          onChange={(e) => setIngredientUnit(e.target.value)}
          placeholder="Ingredient Unit: string"
        />
        <button className="btn-add-ingredient" onClick={addIngredient}>
          Add Ingr.
        </button>{" "}
        <button className="btn-add" onClick={addRecipe}>
          Add a new recipe
        </button>{" "}
      </div>
    </>
  )
}

export default CreateRecipePage