import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateSuccess } from "../../store/user/userSlice";
import { useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import userDefaultImage from "../../assets/user.png";

export default function Profile() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const [username, setUsername] = useState(userInfo?.username);
  const [imageUrl, setImageUrl] = useState(userInfo?.image || userDefaultImage);

  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImage(imagemSelecionada);
      setImageUrl(URL.createObjectURL(imagemSelecionada)); // Criando a URL temporária
    }
  };

  const handleSaveChanges = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("username", username || "uknown");
      if (image) {
        formData.append("image", image);
      }

      await api
        .put(`/user/${userInfo?.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          dispatch(updateSuccess(response.data));
          toast.success("Usuário com sucesso.", { autoClose: 3000 });
        });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-grow justify-center items-center">
      <form
        className="flex flex-col gap-5 items-center	"
        onSubmit={handleSaveChanges}
      >
        <img src={imageUrl} className="h-36 w-36 bg-white rounded-full" />
        <input type="file" onChange={handleImagemChange} />
        <input
          className="p-3 rounded border-black border-2 text-black w-60"
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="w-60 font-bold bg-green-500 p-3 rounded text-white flex flex-row items-center justify-center"
          type="submit"
        >
          {isLoading && <Loader />} Salvar
        </button>
        <p>Criado em: {userInfo?.date_created}</p>
        <p>Última atualização: {userInfo?.date_updated}</p>
      </form>
    </div>
  );
}
