import React, { useEffect } from 'react'
import useRecipeState from '../../states/StateManager';
import {RecipeCard} from './RecipeCard';

const RecipeLists = () => {

    const {recipes, getRecipesFromAPI} = useRecipeState();

    useEffect(() => {

        getRecipesFromAPI();
    },[],)

  return (
    <div>
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}/>
        ))}
        
    </div>
  )
}

export default RecipeLists
