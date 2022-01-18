import styles from "./FilterList.module.css";
import { getFilter } from "../../redux/Phonebook-redux/PhonebookSelector";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Phonebook-redux/PhonebookSlicer";

export default function FilterList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} name="filter" />
    </label>
  );
}
