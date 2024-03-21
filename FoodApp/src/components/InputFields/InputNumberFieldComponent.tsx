import React from "react";
import { useState } from "react";

interface InputNumberFieldProps {
  placeholderValue: string;
  onValueChange: (value: number) => void;
}
const InputNumberFieldComponent: React.FC<InputNumberFieldProps> = ({
  placeholderValue,
  onValueChange, 
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value); //Converts the value to a number, wait and see if it actually works TODO
    if (!isNaN(newValue)){
    setValue(newValue);
    onValueChange(newValue); // Call the callback function with the new value
    }
  };

  return (
    <>
      <div>
        <input
          placeholder={placeholderValue}
          value={value}
          onChange={handleChange}
          type="number"
        />
      </div>
    </>
  );
};
export default InputNumberFieldComponent;
