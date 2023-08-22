import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.listname}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listitem}>
            <span>
            {name}: {number}
            </span>
            <button data-id={id} onClick={onDeleteContact} className={css.btn}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  
};
