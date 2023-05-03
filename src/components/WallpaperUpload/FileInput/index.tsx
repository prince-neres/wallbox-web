import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

interface FileInputProps {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function FileInput({ setImage }: FileInputProps) {
  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImage(imagemSelecionada);
    }
  };

  return (
    <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
      <span className="flex flex-col justify-center items-center gap-3">
        <ArrowUpTrayIcon className="h-10 w-10 text-gray-600" />
        <span className="font-medium text-gray-600">
          Solte a imagem aqui, ou{" "}
          <span className="text-blue-600 underline">Procure</span>
        </span>
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
