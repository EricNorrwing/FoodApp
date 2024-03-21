import React, { useState } from "react";

interface InputTextFieldProps {
  placeholderValue: string;
  onValueChange: (value: string) => void;
}

const InputTextFieldComponent: React.FC<InputTextFieldProps> = ({
  placeholderValue,
  onValueChange,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue); // Call the callback function with the new value
  };

  return (
    <div>
      <input
        placeholder={placeholderValue}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputTextFieldComponent;
