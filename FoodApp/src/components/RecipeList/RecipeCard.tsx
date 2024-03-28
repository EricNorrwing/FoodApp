import React from 'react';
import "./RecipeCard.css";
import { Recipe } from '../../types';

interface Props {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: Props) => {
    return (
        <div className='recipeCard'>
            <div className='recipeCardImage'>
                <img src={recipe.imageUrl} alt={recipe.title} />
            </div>
            <div className='recipeCardTitle'>
                <h3>{recipe.title}</h3>
            </div>
        </div>
    );
};

