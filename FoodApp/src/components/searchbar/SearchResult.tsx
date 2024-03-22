import "./SearchResult.css";
import useRecipeState from "../../states/StateManager";
import { Recipe } from "../../types";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ result }) => {

  const navigate = useNavigate()
  const recipes = useRecipeState((state) => state.recipes)
  
 
  
  
  const found = recipes.find((recipe) => recipe.title === result.title)
  
  return <div className="search-result" onClick={() => 
    navigate("/recipe/", { 
    state: found, 
  })  }>{result.title}</div>;
};
