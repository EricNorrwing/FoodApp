import React from 'react'
import CreateRecipeComponent from '../components/CreateRecipeComponent'
import { Recipe, Ingredient, Ratings } from '../types'
import { useState } from 'react'

const CreateRecipePage = () => {

  const [recipeTest, setRecipeTest] = useState<Recipe>()

  const onRecipeSubmit = (recipe: Recipe) => {
    setRecipeTest(recipe)
    console.log(recipeTest); // Log the recipe object
  }

  return (
    <>
    <div>
    <CreateRecipeComponent onRecipeSubmit={onRecipeSubmit} />
      </div>
    </>
  )
}

export default CreateRecipePage