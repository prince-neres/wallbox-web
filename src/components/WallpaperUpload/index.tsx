import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
import TagsInput from "./TagInput";
import FileInput from "./FileInput";
import Loader from "../Loader";

function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("tags", JSON.stringify(tags));
      formData.append("description", description);

      try {
        await api.post("/upload_wallpaper", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Imagem enviada com sucesso.", { autoClose: 3000 });
        navigate("/wallpapers");
      } catch (error) {
        toast.error("Erro ao enviar imagem.", { autoClose: 3000 });
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Imagem precisa ser importada!", { autoClose: 2000 });
    }
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 py-10">
      {imageUrl && (
        <div className="w-64 md:w-96 sm:w-80">
          <img alt={title} src={imageUrl} />
        </div>
      )}

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
          className="p-3  outline-none border-black border-2 text-black"
        />

        <input
          value={description}
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          className="p-3  outline-none border-black border-2 text-black"
        />

        <TagsInput tags={tags} setTags={setTags} />

        <FileInput
          image={image}
          setImage={setImage}
          setImageUrl={setImageUrl}
        />

        <button
          className="font-bold bg-green-500 hover:bg-green-700 p-3 text-white flex flex-row items-center justify-center duration-200"
          type="submit"
        >
          {isLoading ? <Loader /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
