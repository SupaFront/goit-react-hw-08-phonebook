import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink className={s.navs} activeClassName={s.navsa} exact to="/">
          Home
        </NavLink>
        <NavLink className={s.navs} activeClassName={s.navsa} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </div>
  );
}
