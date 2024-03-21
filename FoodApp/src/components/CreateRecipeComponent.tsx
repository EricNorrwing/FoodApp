import React, { useEffect, useState } from 'react';
import { Ingredient, Recipe, Ratings } from "../types";
import InputTextFieldComponent from './InputFields/InputTextFieldComponent';
import useRecipeState from '../states/StateManager'; 
import InputNumberFieldComponent from './InputFields/InputNumberFieldComponent';
import CreateIngredientComponent from './CreateIngredientComponent/CreateIngredientComponent';
import CategorySelector from './InputFields/categorySelector/CategorySelector';


const CreateRecipeComponent = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    title: '',
    description: '',
    imageUrl: '',
    timeInMins: 0,
    categories: [],
    instructions: [],
    ingredients: []
  });

  
  const recipeState = useRecipeState(); // Access the global state

  const handleInputChange = (fieldName: string, value: string) => {
    //Updates the recipe state with information from the form.
    setRecipe({ ...recipe, [fieldName]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Ensure that all values in the object "recipe" have been added
    if (
      recipe.title.trim() !== '' &&
      recipe.description.trim() !== '' &&
      recipe.imageUrl.trim() !== '' &&
      recipe.timeInMins !== 0 &&
      recipe.ingredients.length > 0 &&
      recipe.categories.length > 0// Assuming at least one ingredient is required
    ) {
      recipeState.addNewRecipe(recipe)
      try {
        await recipeState.postRecipeToAPI(recipe); // Send the object to StateManager which then posts it to the API
      } catch (error) {
        console.error("Error posting Recipe: ", error);
      }
      // Empty the state for next input
      setRecipe({
        title: '',
        description: '',
        imageUrl: '',
        timeInMins: 0,
        categories: [],
        instructions: [],
        ingredients: [],
      });
    } else {
      alert('Please fill in all fields');
    }
  };
  


  //INGREDIENT STUFF

  const handleIngredientSubmit = (ingredient: Ingredient) => {
    // Check if all fields of the ingredient are filled in
    if (ingredient.name.trim() !== '' && ingredient.amount !== 0 && ingredient.unit.trim() !== '') {
      // Add the new ingredient to the recipe's ingredients array
      setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ingredient] });
    } else {
      alert('Please fill in all fields for the ingredient');
    }
  };


  //Categories
  const handleCategorySubmit = (categories: string[]) => {
    setRecipe({ ...recipe, categories });
  };


  


  useEffect(() => {
    console.log(recipe.ingredients);
  }, [recipe.ingredients])

  return (
    <>
    <h1>Build your own recipe :)</h1>
      <InputTextFieldComponent placeholderValue="Recipe Title" onValueChange={(value) => handleInputChange('title', value)} />
      <InputTextFieldComponent placeholderValue="Description" onValueChange={(value) => handleInputChange('description', value)} />
      <InputTextFieldComponent placeholderValue="Image URL" onValueChange={(value) => handleInputChange('imageUrl', value)} />
      <InputNumberFieldComponent placeholderValue="Time In Minutes" onValueChange={(value) => handleInputChange('timeInMins', value)} />
      <InputTextFieldComponent placeholderValue="Instructions" onValueChange={(value) => handleInputChange('instructions', value)} />
      <CategorySelector onCategoryArrayChange={handleCategorySubmit}/>
      <div>
        <p>Add Ingredients</p>
        <CreateIngredientComponent onIngredientSubmit={handleIngredientSubmit} />
        {/* Display the added ingredients */}
        {recipe.ingredients.length > 0 && (
          <div>
            <p>Added Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}, {ingredient.amount}, {ingredient.unit}</li>))}
            </ul>
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>Add Recipe!</button>
    </>
  );
};

export default CreateRecipeComponent;
