import { FormContacts } from './FormContacts/FormContacts';
// import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import css from './App.module.css';

// const LOCALSTORAGE_KEY = 'contacts';
// const initialState = [];

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || initialState
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const onDeleteContact = idContact => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== idContact)
  //   );
  // };

  // const addContact = contact => {
  //   const existingContact = contacts.some(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  //   );

  //   if (existingContact) {
  //     alert(`${contact.name} name is already in contacts`);
  //   } else {
  //     setContacts(prevState => [...prevState, contact]);
  //   }
  // };
  // const onFilterChange = evt => {
  //   const { value } = evt.currentTarget;
  //   setFilter(value);
  // };
  // const handleFilteredContacts = contacts => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // const filtered = handleFilteredContacts(contacts);

  return (
    <div className={css.container}>
      <h1 className="">Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
};
