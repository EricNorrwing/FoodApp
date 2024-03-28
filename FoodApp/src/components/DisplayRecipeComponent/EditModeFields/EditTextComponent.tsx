import React from 'react';

interface EditTextProps {
  value: string;
  editMode: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cssId: string;
}

const EditTextComponent = ({ value, editMode, handleChange, cssId }: EditTextProps) => {
  return (
    <div>
      {editMode ? (
        <div id={cssId}>
          <input onChange={handleChange} value={value || ''} /> 
        </div>
      ) : (
        <div id={cssId}>
          <h1>{value}</h1> 
        </div>
      )}
    </div>
  );
};

export default EditTextComponent
