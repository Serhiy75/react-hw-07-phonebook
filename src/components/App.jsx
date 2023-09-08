import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
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
