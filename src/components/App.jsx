import {Component} from "react";
import {ContactForm} from "./ContactForm/ContactForm";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  componentDidMount = () => {
    if (localStorage.getItem("contacts") !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts"))
      })
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
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
    console.log(contacts);
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
