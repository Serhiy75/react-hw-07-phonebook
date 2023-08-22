import React from 'react';

export const FilterContact = ({ value, onInputChange }) => {
  return <input type="text" value={value} onChange={onInputChange} />;
};
