import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const names = this.state.contacts.map(item => item.name);

    if (
      names.some(name => name.toLowerCase() === newContact.name.toLowerCase())
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = value => {
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSave={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          filter={this.state.filter}
          filterContacts={this.filterContacts}
        />
        <ContactList onDelete={this.deleteContact} items={filteredContacts} />
      </Container>
    );
  }
}
