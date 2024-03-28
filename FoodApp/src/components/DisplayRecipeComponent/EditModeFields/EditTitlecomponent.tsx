import React from 'react';

interface EditTitleProps {
  value: string;
  editMode: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cssId: string;
}
const EditTitleComponent = ({ value, editMode, handleChange, cssId }: EditTitleProps) => {
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

export default EditTitleComponent;
