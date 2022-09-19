import style from './ContactForm.module.css'
import {Component} from "react";
import PropTypes from "prop-types";

export class ContactForm extends Component {

  submitContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.props.createContact(name, number);
    form.reset();
  }

  render() {
    return (
      <div className={style.form}>
        <form onSubmit={this.submitContact}>
          <div className={style.inputWrapper}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>

          <div className={style.inputWrapper}>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit">Add Contact</button>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes={
  createContact: PropTypes.func.isRequired
}
