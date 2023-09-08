import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

// import { selectError, selectLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalazeFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalazeFilter)
    );
  };
  console.log(contacts);

  const filterContact = getFilterContact();

  return (
    <ul className={css.listname}>
      {filterContact.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.listitem}>
            <span>
              {name}: {phone}
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
