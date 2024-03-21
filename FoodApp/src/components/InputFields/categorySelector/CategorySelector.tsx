import React, { useState } from "react";
import "./CategorySelector.css";

//to use this component this code must be added to parent
/*
  const [categoryArray, setCategoryArray] = useState<string[]>([]);

  const handleCategoryArrayChange = (newArray: string[]) => {
    setCategoryArray(newArray);
  };

  call on the component with:
  <CategorySelector onCategoryArrayChange={handleCategoryArrayChange}/>
*/

interface CategorySelectorProps {
  onCategoryArrayChange: (newArray: string[]) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onCategoryArrayChange }) => {
  //Arrays for categories and for the checked state in the checkbox
  const categoryOptions = ["Meat", "Chicken", "Fish", "Seafood", "Vegerarian", "Vegan"];
  const [checkboxCheckedStates, setcheckboxStates] = useState<boolean[]>(Array(categoryOptions.length).fill(false));

  //functions to show/hide checkbox menu
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  //functions to create categoryArray
  const handleChange = (index: number) => {
    const updatedCheckedStates = [...checkboxCheckedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setcheckboxStates(updatedCheckedStates);

    const selectedItems = updatedCheckedStates.map((checked, i) => (checked ? categoryOptions[i] : "")).filter(Boolean);
    onCategoryArrayChange(selectedItems);
  };

  return (
    <div className={`dropdown-check-list ${isVisible ? "visible" : ""}`}>
      <span className="anchor" onClick={toggleDropdown}>
        Select Category
      </span>
      <ul className="items">
        {categoryOptions.map((category, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" checked={checkboxCheckedStates[index]} onChange={() => handleChange(index)} />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
