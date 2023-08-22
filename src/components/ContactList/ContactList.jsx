import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {

  return (

      <ul >
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button data-id={id} onClick={onDeleteContact}>Delete</button>
            </li>
          );
        })}
      </ul>
  );
};
