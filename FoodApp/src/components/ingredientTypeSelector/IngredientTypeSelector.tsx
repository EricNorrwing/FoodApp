import { useState } from "react";
import "../categorySelector/CategorySelector.css";


interface IngredientTypeSelectorProps {
    onTypeStringChange: (newString: string) => void;
}

const IngredientTypeSelector: React.FC<IngredientTypeSelectorProps> = ({onTypeStringChange }) => {
    const ingredientTypeOptions = ["Liter", "Deciliter", "Gram", "Kilogram", "Pieces", "Slices"];
    const [selectedType, setselectedType] = useState<string | null>(null);

    
const [isVisible, setIsVisible] = useState<boolean>(false);

const toggleDropdown = () => {
  setIsVisible((prevVisibility) => !prevVisibility);
};

const handleTypeSelection = (type:string) =>{
    setselectedType(type)
    onTypeStringChange(type)
    setIsVisible(false)
}


    return (
        <div className={`dropdown-check-list ${isVisible ? "visible" : ""}`}>
          <span className="anchor" onClick={toggleDropdown}>
            {selectedType?selectedType:"Select ingredient type"}
          </span>
          <ul className="items">
            {ingredientTypeOptions.map((type, index) => (
              <li key={index} onClick = {() => handleTypeSelection(type)}>
                {type}
            </li>
            ))}
          </ul>
        </div>
      );
  };
  
  export default IngredientTypeSelector;