import useRecipeState from "../states/StateManager";
import recipesData from "./stockRecipes.json";
import "../resources/Variables";
import { getURL } from "../resources/Variables";
import axios from "axios";

const CleanRecipeAPIData = () => {
  const recipeState = useRecipeState();
  const recipeURL = getURL();

  //function to upload full json file
  const uploadRecipeJson = async () => {
    for (const recipe of recipesData) {
      try {
        const response = await axios.post(`${recipeURL}/recipes`, recipe);
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error, upload failed");
      }
    }
  };

  //function to uppload json and uppdate state
  const addDefaultRecipeData = () => {
    uploadRecipeJson();
    recipeState.getRecipesFromAPI();
  };

  //Todo add clear state
  const clearAPI = async () => {
    try {
      const response = await axios.get(`${recipeURL}/clear`);
      if (response.status === 200) {
        console.log(response.status);
        alert("API cleared");
        recipeState.setRecipeState([]);
      }
    } catch (error) {
      console.error("Error, clear failed");
    }
    console.log(recipeState.recipes);
  };

  const handleUploadClick = () => {
    addDefaultRecipeData();
  };

  const handleClearAPIClick = () => {
    clearAPI();
  };

  return (
    <div>
      <button onClick={handleUploadClick}>Add Default Recipe Data</button>
      <button onClick={handleClearAPIClick}>Clear API From All Data</button>
    </div>
  );
};

export default CleanRecipeAPIData;
