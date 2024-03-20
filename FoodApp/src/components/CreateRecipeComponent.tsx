import React, { useState } from 'react';
import { Recipe } from "../types";
import InputTextFieldComponent from './InputTextFieldComponent';
import useRecipeState from '../states/StateManager'; 

interface RecipeForm {
  onRecipeSubmit: (recipe: Recipe) => void; // Callback function to handle recipe submission
}

const CreateRecipeComponent: React.FC<RecipeForm> = ({ onRecipeSubmit }) => {
  const [recipe, setRecipe] = useState<Recipe>({
    title: '',
    description: '',
    imageUrl: '',
    categories: [],
    instructions: [],
    ingredients: { name: '', amount: 0, unit: '' }
  });

  const recipeState = useRecipeState(); // Access the global state

  const handleInputChange = (fieldName: string, value: string) => {
    //Updates the recipe state with information from the form.
    setRecipe({ ...recipe, [fieldName]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Ensure that all values in the object "recipe" has been added //Thanks chatGPT
    if (Object.values(recipe).every(value => value !== '')) {
      onRecipeSubmit(recipe); // Fetch the Recipe object from the form when clicking submit
      try {
        await recipeState.postRecipeToAPI(recipe); // Send the object to Statemanager who then posts it to the API
      } catch (error) {
        console.error("Error posting Recipe: ", error);
      }
      setRecipe({  //Empty the state for next input
        title: '',
        description: '',
        imageUrl: '',
        categories: [],
        instructions: [],
        ingredients: { name: '', amount: 0, unit: '' }
      });
    } else {
      alert('Please fill in all fields');
    }
  };


  // _id?: string,  
  //   title: string,
  //   description: string,
  //   ratings?: Ratings,
  //   imageUrl: string,
  //   timeInMins?: number,
  //   categories: string[], 
  //   instructions: string[],
  //   ingredients: Ingredient
  return (
    <form onSubmit={handleSubmit}>
      <InputTextFieldComponent placeholderValue="Recipe Title" onValueChange={(value) => handleInputChange('title', value)} />
      <InputTextFieldComponent placeholderValue="Description" onValueChange={(value) => handleInputChange('description', value)} />
      <InputTextFieldComponent placeholderValue="Image URL" onValueChange={(value) => handleInputChange('imageUrl', value)} />
      <InputTextFieldComponent placeholderValue="Time in Minutes" onValueChange={(value) => handleInputChange('timeInMins', value)} />
      {/* <InputTextFieldComponent placeholderValue="categories" onValueChange={(value) => handleInputChange('cateogires', value)} /> REPLACE WITH CATEGORY COMPONENT  */}
      {/* <InputTextFieldComponent placeholderValue="Write instructions here" onValueChange={(value) => handleInputChange('instructions', value)} /> //REPLACE WITH STRING ARRAY, OR DONT TODO */}
      {/* <InputTextFieldComponent placeholderValue="Ingredient List" onValueChange={(value) => handleInputChange('ingredients', value)} /> REPLACE WITH INGREDIENT COMPONENT */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateRecipeComponent;
