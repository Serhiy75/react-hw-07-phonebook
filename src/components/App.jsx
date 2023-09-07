import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className="">Phonebook</h1>
      <FormContacts />
      {isLoading && <p>Loading...</p>}
      {error ? (
        <p> Error.{error}</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <FilterContact />
          <ContactList />
        </>
      )}
    </div>
  );
};
