import {Component} from "react";
import {ContactForm} from "./ContactForm/ContactForm";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  createContact = (name, number) => {
    let existingContacts = this.state.contacts.filter(contact => contact.name === name);

    if (existingContacts.length === 0) {
      this.setState(
        {
          contacts: [...this.state.contacts, {name, number, id: nanoid()}]
        }
      )
    } else {
      alert(`${name} is already in contacts.`)
    }
  }

  searchContact = (e) => {
    this.setState(
      {
        filter: e.currentTarget.value
      }
    )
  }

  showContacts = () => {
    let contacts = this.state.contacts;
    let filter = this.state.filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
  }

  deleteContact = (idToDelete) => {
    this.setState(
      {
        contacts: this.state.contacts.filter(contact => contact.id !== idToDelete)
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm createContact={this.createContact}/>
        <h2>Contacts</h2>
        <Filter searchContact={this.searchContact}/>
        <ContactList contacts={this.showContacts()} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}
