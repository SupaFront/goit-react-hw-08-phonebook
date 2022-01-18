import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <NavLink to="/login">Log In</NavLink>
      ) : (
        <NavLink className={s.pizz} to="/register">
          Sign Up
        </NavLink>
      )}
    </>
  );
}
