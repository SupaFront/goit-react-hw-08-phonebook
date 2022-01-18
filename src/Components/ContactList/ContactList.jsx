import styles from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFilteredContactsMemo } from "../../redux/Phonebook-redux/PhonebookSelector";
import { getContacts } from "../../redux/Phonebook-redux/PhonebookOperations";
import { removeContact } from "../../redux/Phonebook-redux/PhonebookOperations";
import { editOnClick } from "../../redux/Phonebook-redux/PhonebookSlicer";

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContactsMemo);
  const deleteContact = (id) => dispatch(removeContact(id));

  // const contacts = items.filter((contact) =>
  //   contact?.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  // );
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) =>
        name ? (
          <li className={styles.theloop} key={id}>
            <p className={styles.text}>{name}</p>
            <p className={styles.txt}>{number}</p>
            <button className={styles.btn} onClick={() => deleteContact(id)}>
              Remove
            </button>
            <button
              className={styles.btn}
              onClick={() => dispatch(editOnClick({ id, name, number }))}
            >
              Edit
            </button>
          </li>
        ) : null
      )}
    </ul>
  );
}
