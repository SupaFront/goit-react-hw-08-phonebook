import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      <nav>
        <NavLink className={s.navs} activeClassName={s.navsa} exact to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={s.navs} activeClassName={s.navsa} to="/contacts">
            Contacts
          </NavLink>
        ) : (
          <NavLink className={s.navs} activeClassName={s.navsa} to="/login">
            Log In
          </NavLink>
        )}
      </nav>
    </div>
  );
}
