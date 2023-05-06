import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import TagsInput from "../../WallpaperUpload/TagInput";
import Loader from "../../Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import ImageModal from "../../Wallpaper/WallpaperModal";

function WallpaperEdit() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`wallpaper/${id}`)
      .then((response) => {
        setImage(response.data.image);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setTags(response.data.tags);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && description && tags) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", JSON.stringify(tags));
      formData.append("description", description);

      try {
        await api.put(`/wallpaper/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Imagem salva com sucesso.", { autoClose: 3000 });
        navigate("/user-wallpapers");
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
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-64 md:w-96 sm:w-80">
        <ImageModal alt={title} src={image} />
      </div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-5 w-64 sm:w-80"
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

        <button
          className="font-bold bg-green-500 p-3 rounded text-white flex flex-row items-center justify-center"
          type="submit"
        >
          {isLoading ? <Loader /> : "Salvar"}
        </button>
      </form>
    </div>
  );
}

export default WallpaperEdit;
