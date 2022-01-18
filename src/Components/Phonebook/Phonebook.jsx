import { BrowserRouter } from "react-router-dom";
import Form from "../Form";
import ContactList from "../ContactList";
import FilterList from "../Filter";
import AuthNav from "../AuthNav";
import styles from "./Phonebook.module.css";

export default function Phonebook() {
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
