import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, TitlePhoneBook } from './App.styled';

export const App = () => {
  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <Form />
      <TitlePhoneBook>Contacts</TitlePhoneBook>
      <Filter />
      <ContactList />
    </Container>
  );
};
