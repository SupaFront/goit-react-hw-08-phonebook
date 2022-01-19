import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginUser } from "../../redux/auth/authOperations";

export default function SignUp() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
    setForm({ email: "", password: "" });
  };

  return (
    <>
      <h1>Please Log In</h1>
      <form onSubmit={onFormSubmit} autoComplete="on">
        <label>
          Почта
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={onChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
