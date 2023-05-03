import React, { useState } from "react";
import api from "../../api";
import TagsInput from "./TagInput";
import FileInput from "./FileInput";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userSlice";
import Loader from "../Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userInfo } = useSelector(selectUser);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("tags", JSON.stringify(tags));
      formData.append("description", description);

      try {
        await api.post("/upload_wallpaper", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo?.token}`,
          },
        });
      } catch (error) {
        toast.error("Erro ao enviar imagem.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col gap-5 w-80"
      onKeyDown={handleKeyDown}
    >
      <input
        value={title}
        type="text"
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded border-black border-2 text-black"
      />

      <input
        value={description}
        type="text"
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 rounded border-black border-2 text-black"
      />

      <TagsInput tags={tags} setTags={setTags} />

      <FileInput setImage={setImage} />

      <button
        className="font-bold bg-green-500 p-3 rounded text-white flex flex-row items-center justify-center"
        type="submit"
      >
        {isLoading ? <Loader /> : "Enviar"}
      </button>
    </form>
  );
}

export default ImageUpload;
