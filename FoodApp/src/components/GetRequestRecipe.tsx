import axios from 'axios'
import { useState} from 'react'
import {getURL} from '../resources/Variables'
import { Ingredient, Recipe, Ratings } from '../types'


export const getRequestRecipe = async () => {
    try {
        const swaggerURL = getURL();
        const response = await axios.get<Recipe[]>(`${swaggerURL}/recipes`);
        
        if (response.status === 200) {
          console.log("Recipes", response.data);
          return response.data;
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
      }
}
   

