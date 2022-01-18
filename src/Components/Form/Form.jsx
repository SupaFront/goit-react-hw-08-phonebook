import React from "react";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getContactForEdit,
} from "../../redux/Phonebook-redux/PhonebookSelector";
import {
  addContact,
  editContact,
} from "../../redux/Phonebook-redux/PhonebookOperations";

export default function Form() {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const contactForEdit = useSelector(getContactForEdit);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      items.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert("Контакт с таким именем уже существует!");
      setContact({ ...contact, name: "" });
    } else {
      contactForEdit
        ? dispatch(editContact(contact))
        : dispatch(addContact(contact));
      setContact({ name: "", number: "" });
    }
  };

  useEffect(() => {
    contactForEdit
      ? setContact(contactForEdit)
      : setContact({ name: "", number: "" });
  }, [contactForEdit]);

  return (
    <>
      <form onSubmit={onHandleSubmit} action="">
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          onChange={onInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <input
          onChange={onInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
