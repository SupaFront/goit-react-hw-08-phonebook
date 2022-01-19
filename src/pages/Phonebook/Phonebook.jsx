import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/Phonebook-redux/PhonebookOperations";
import Form from "../../Components/Form";
import ContactList from "../../Components/ContactList";
import FilterList from "../../Components/Filter";
import styles from "./Phonebook.module.css";

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <>
      <h2 className={styles.title}>Phonebook</h2>
      <Form />
      <FilterList />
      <h2 className={styles.title}> Contact List</h2>
      <ContactList />
    </>
  );
}
