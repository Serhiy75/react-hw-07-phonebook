import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactsThunk } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getFilterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContact = getFilterContact();

  return (
    <ul className={css.listname}>
      {filterContact.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listitem}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button "
              onClick={() => onDeleteContact(id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
