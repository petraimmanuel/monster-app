import React from 'react';
import './search-box.css'

export const SearchBox = ({ placeholder, handleChange }) => (
        <input 
            type = "search" 
            placeholder = {placeholder}
            className = 'search'
            onChange = {handleChange}
        />
)