import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";

export default function SignUp() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <>
      <h1>Registration Page</h1>
      <form onSubmit={onFormSubmit} autoComplete="on">
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
