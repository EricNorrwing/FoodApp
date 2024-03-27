import React from 'react';

interface EditTitleProps {
  value: string;
  mode: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define handleChange function
}

const EditTitleComponent = ({ value, mode, handleChange }: EditTitleProps) => {
  return (
    <div>
      {mode ? (
        <div>
          <input onChange={handleChange} value={value || ''} /> {/* Use handleChange prop */}
        </div>
      ) : (
        <div className="Title">
          <h1>{value}</h1> {/* Display value prop directly */}
        </div>
      )}
    </div>
  );
};

export default EditTitleComponent;
