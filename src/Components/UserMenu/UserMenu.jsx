import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span className={s.text}>Welcome, {name}</span>
      <button className={s.button} onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}
