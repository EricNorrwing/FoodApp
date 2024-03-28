import React from 'react';
import { useState } from 'react';

interface EditInstructionProps{
    value: string[];
    editMode: boolean
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    cssId: string;
}

const EditTextArrayMapComponent = ({ value, editMode, handleChange, cssId}: EditInstructionProps) => {


    
    return(
        
          <div id={cssId}>
            {editMode ? (
                <ol>

                {value.map((instruction, index) => (
                <input onChange={handleChange} value={instruction || ''}  key={index}/>
                
                ))}
                </ol>

            ) : (
            <ol>
              {value.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            )}
          </div>
       
    )
}

export default EditTextArrayMapComponent;

