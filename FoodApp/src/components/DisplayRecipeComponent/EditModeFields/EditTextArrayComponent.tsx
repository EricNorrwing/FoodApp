import React from 'react';
import CategorySelector from '../../InputFields/categorySelector/CategorySelector';

interface EditTextArrayProps {
  value: string[];
  editMode: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cssId: string;
}

const EditTextArrayComponent = ({ value, editMode, handleChange, cssId }: EditTextArrayProps) => {
  return (
    <div>
      {editMode ? (
        <div id={cssId}>
           <CategorySelector onCategoryArrayChange={(selectedItems) => handleChange('categories', selectedItems)} />
        </div>
      ) : (
        <div id={cssId}>
          {value}
        </div>
      )}
    </div>
  );
};

export default EditTextArrayComponent
