import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userApi";
import { AppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Entrar</button>
      <Link to={"/register"}>Sem conta? Cadastrar</Link>
    </form>
  );
}
