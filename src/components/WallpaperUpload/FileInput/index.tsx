import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { convertToMB } from "../../../utils/scripts";

interface FileInputProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export default function FileInput({
  image,
  setImage,
  setImageUrl,
}: FileInputProps) {
  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImage(imagemSelecionada);
      setImageUrl(URL.createObjectURL(imagemSelecionada));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const imagemArrastada = event.dataTransfer.files?.[0];
    if (imagemArrastada) {
      setImage(imagemArrastada);
      setImageUrl(URL.createObjectURL(imagemArrastada));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  return (
    <label
      className=" text-center flex rounded justify-center w-full p-4 transition bg-white border-2 border-gray-300 border-dashed appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <span className="flex flex-col justify-center items-center gap-3">
        <ArrowUpTrayIcon className="h-12 w-12 text-gray-600" />
        <span className="font-medium text-gray-600">
          Solte a imagem aqui, ou{" "}
          <span className="text-blue-700 hover:text-blue-500">Procure</span>
        </span>
        {image && (
          <div className="flex flex-col justify-center items-center">
            <span className="text-blue-500 line-clamp-1">{image?.name}</span>
            <span className="text-blue-500 line-clamp-1">
              {convertToMB(image?.size)} mb
            </span>
          </div>
        )}
      </span>
      <input
        type="file"
        name="file_upload"
        className="hidden"
        onChange={handleImagemChange}
      />
    </label>
  );
}
