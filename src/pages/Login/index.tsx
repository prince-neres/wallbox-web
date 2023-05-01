import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/userApi";
import { selectUser } from "../../redux/reducers/userSlice";
import { AppDispatch } from "../../redux/store";
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
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-center">
      <input
        className="p-3 rounded border-black border-2 text-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mt-3 p-3 rounded border-black border-2 text-black"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="font-bold bg-green-500 p-3 my-5 rounded text-white flex flex-row items-center justify-center"
        type="submit"
      >
        {userInfo.loading && <Loader />} Entrar
      </button>
      {userInfo.error && <p className="text-red-500">{userInfo.error}</p>}
      <div>
        Sem conta?{" "}
        <Link className="text-cyan-600 hover:text-cyan-500" to={"/register"}>
          Cadastrar
        </Link>
      </div>
    </form>
  );
}
