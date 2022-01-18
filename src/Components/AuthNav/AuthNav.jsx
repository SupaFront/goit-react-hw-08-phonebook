import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";

export default function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <NavLink to="/login">Log In</NavLink>
      ) : (
        <NavLink to="/register">Sign Up</NavLink>
      )}
    </>
  );
}
