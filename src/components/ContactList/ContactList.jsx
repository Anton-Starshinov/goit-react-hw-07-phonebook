import Contact from 'components/Contact/Contact';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { List, ListItem } from './ContactsList.styled';
import { getStatusFilter, getIsLoading, getError } from 'redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalized = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p>error</p>}
      {filterContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
