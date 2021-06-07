import React from 'react';

import './serch-box.css';

export const SerchBox = ({placeholder, handleChange }) => (
    <input 
    className = 'search'
        type='serch'
        placeholder={placeholder}
        onChange={ handleChange }
          />
)
