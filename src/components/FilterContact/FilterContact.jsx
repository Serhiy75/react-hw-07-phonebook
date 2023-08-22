import React from 'react';

export const FilterContact = ({ value, onInputChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={onInputChange} />
    </>
  );
};
