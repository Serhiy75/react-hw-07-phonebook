import { nanoid } from 'nanoid';

export const addContact = contact => {
  return { type: 'contact/addContact', payload: { ...contact, id: nanoid() } };
};

export const deleteContact = id => {
  return { type: 'contact/deleteContact', payload: id };
};

export const setFilter = value => {
  return { type: 'contact/setFilter', payload: value };
};
