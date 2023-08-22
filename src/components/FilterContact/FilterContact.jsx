import React from 'react';
import PropTypes from 'prop-types';

export const FilterContact = ({ value, onInputChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={onInputChange} />
    </>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
}