import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");

  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImage(imagemSelecionada);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("user_id", "1");
      formData.append("tags", JSON.stringify(["teste", "teste", "teste"]));
      formData.append("description", "blablbablabl");

      try {
        await axios.post("http://localhost:5000/api/upload_image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={handleImagemChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
