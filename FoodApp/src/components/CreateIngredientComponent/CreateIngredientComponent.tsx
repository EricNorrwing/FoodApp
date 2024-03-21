import React, { useState } from "react";
import InputTextFieldComponent from "../InputFields/InputTextFieldComponent";
import IngredientTypeSelector from "../InputFields/IngredientTypeSelector/IngredientTypeSelector";
import InputNumberFieldComponent from "../InputFields/InputNumberFieldComponent";
import { Ingredient } from "../../types";

interface IngredientForm {
  onIngredientSubmit: (ingredient: Ingredient) => void; // Callback function to handle ingredient submission
}

const CreateIngredientComponent: React.FC<IngredientForm> = ({
  onIngredientSubmit,
}) => {
  const [ingredient, setIngredient] = useState<Ingredient>({
    name: "",
    amount: 0,
    unit: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    // Update the ingredient state with information from the form.
    setIngredient({ ...ingredient, [fieldName]: value });
  };

  const handleIngredientTypeChange = (ingredientTypeString: string) => {
    // Update the ingredient state with the selected type.
    setIngredient({ ...ingredient, unit: ingredientTypeString });
  };

  return (
    <div>
      <InputTextFieldComponent
        placeholderValue="Ingredient Name"
        onValueChange={(value) => handleInputChange("name", value)}
      />
      <InputNumberFieldComponent
        placeholderValue="Amount of ingredient"
        onValueChange={(value) => handleInputChange("amount", value)}
      />
      <IngredientTypeSelector
        onIngredientTypeChange={handleIngredientTypeChange}
      />
      <br />
      <button onClick={() => onIngredientSubmit(ingredient)}>
        Add Ingredient
      </button>
    </div>
  );
};

export default CreateIngredientComponent;
