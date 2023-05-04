import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

interface FileInputProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function FileInput({ image, setImage }: FileInputProps) {
  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImage(imagemSelecionada);
    }
  };

  const convertToMB = (size: number) => {
    const sizeInMB = size / (1024 * 1024);
    return sizeInMB.toFixed(2); // retorna a string com duas casas decimais
  };

  return (
    <label className="flex justify-center w-full p-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
      <span className="flex flex-col justify-center items-center gap-3">
        <ArrowUpTrayIcon className="h-12 w-12 text-gray-600" />
        <span className="font-medium text-gray-600">
          Solte a imagem aqui, ou{" "}
          <span className="text-blue-600 underline">Procure</span>
        </span>
        {image && (
          <div className="flex flex-col justify-center items-center">
            <span className="text-blue-500 line-clamp-1">{image?.name}</span>
            <span className="text-blue-500">{convertToMB(image?.size)} mb</span>
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
