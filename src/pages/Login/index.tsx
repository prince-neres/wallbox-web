import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/user/userApi";
import { selectUser } from "../../store/user/userSlice";
import { AppDispatch } from "../../store/store";
import Loader from "../../components/Loader";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo.userInfo?.token) {
      navigate("/wallpapers");
    }
  }, [navigate, userInfo]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-center">
      <input
        className="p-3 rounded outline-none border-black border-2 text-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mt-3 p-3 rounded outline-none border-black border-2 text-black"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="font-bold rounded bg-green-500 hover:bg-green-700 p-3 my-5 text-white flex flex-row items-center justify-center duration-200"
        type="submit"
      >
        {userInfo.loading && <Loader />} Entrar
      </button>
      <div>
        Sem conta?{" "}
        <Link
          className="text-blue-700 hover:text-blue-500 duration-100"
          to={"/register"}
        >
          Cadastrar
        </Link>
      </div>
    </form>
  );
}
