import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/user/userApi";
import { selectUser } from "../../store/user/userSlice";
import { AppDispatch } from "../../store/store";
import Loader from "../../components/Loader";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.userInfo?.token) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(register(username, email, password, confirmPassword));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-center">
      <input
        className="p-3  outline-none border-black border-2 text-black"
        placeholder="Nome do usuário"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="p-3 mt-3  outline-none border-black border-2 text-black"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-3 mt-3  outline-none border-black border-2 text-black"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Confirmar Senha"
        className="p-3 mt-3  outline-none border-black border-2 text-black"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="font-bold bg-green-500 hover:bg-green-700 p-3 my-5 text-white flex flex-row items-center justify-center duration-200"
        type="submit"
      >
        {userInfo.loading && <Loader />}Cadastrar
      </button>
      <div>
        Possui conta?{" "}
        <Link className="text-cyan-600 hover:text-cyan-500" to={"/login"}>
          Entrar
        </Link>
      </div>
    </form>
  );
}
