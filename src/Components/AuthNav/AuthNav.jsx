import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <>
      <NavLink className={s.pizz} to="/register">
        Sign Up
      </NavLink>
    </>
  );
}
