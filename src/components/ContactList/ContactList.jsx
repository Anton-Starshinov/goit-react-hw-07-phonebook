import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { List, ListItem } from './ContactsList.styled';
import { getStatusFilter } from 'redux/selectors';

function ContactList() {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const normalized = filter.toLocaleLowerCase();
  const contacts = contactsState.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
