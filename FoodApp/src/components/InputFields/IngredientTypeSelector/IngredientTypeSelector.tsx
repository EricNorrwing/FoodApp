import { useState } from "react";
import "./IngredientTypeSelector.css"



interface IngredientTypeSelectorProps {
  onIngredientTypeChange: (ingredientType: string) => void;
}

const IngredientTypeSelector: React.FC<IngredientTypeSelectorProps> = ({ onIngredientTypeChange }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [ingredientTypeOptions] = useState<string[]>(["Liter", "Deciliter", "Gram", "Kilogram", "Pieces", "Slices"]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    onIngredientTypeChange(selectedValue);
  };

  return (
    <select value={selectedType} onChange={handleChange}>
      <option value="">Select Ingredient Type</option>
      {ingredientTypeOptions.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default IngredientTypeSelector;

