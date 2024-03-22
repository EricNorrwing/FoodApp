import { useLocation, useNavigate } from "react-router-dom";
import { Recipe } from "../types";
import { getURL } from "../resources/Variables";
import axios from "axios";
import useRecipeState from "../states/StateManager";


function RecipeDetailPage(){

    const navigate = useNavigate();
    const location = useLocation();
    const deleteRecipe = useRecipeState((state) => state.deleteRecipe)

    const recipe = location.state as Recipe


    function checker() {
        //Creates a "are you sure window"
        const result = confirm('Are you sure you want to delete this recipe?')
        if (result == true){
          //if we confirm go to detele function
          handleDelete()
        }
      }
  
      const handleDelete = async () => {
    
        const swaggerURL = getURL();
        
        const response = await axios.delete(`${swaggerURL}/recipes/${recipe._id}`)
      
        if(response.status === 200) {
          deleteRecipe(recipe._id!)
        }

        navigate("/")
      }


    return(
    <div>
        <div>
        <p>{recipe.description}</p>
        <img src={recipe.imageUrl} alt={recipe.title} />
        </div>

        <div>
        <button onClick={checker} >Delete button</button>    
        </div>
    </div>

    )
    }


    export default RecipeDetailPage;