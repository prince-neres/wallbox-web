import { XMarkIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";

interface TagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagsInput = ({ tags, setTags }: TagsInputProps) => {
  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement && event.target.value !== "") {
      if (tags.length >= 5) {
        toast.error("Limite de 5 tags atingido!");
      } else if (event.target.value.length >= 20) {
        console.log(event.target.value.length);
        toast.error("Limite de 20 caracterres para tag atingido!");
      } else {
        setTags([...tags, event.target.value]);
        event.target.value = "";
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Pressione ENTER para adicionar tags"
        className="p-3 mb-3 border-black border-2 text-black w-full outline-none"
      />
      <ul className="flex flex-wrap py-2 items-center justify-center">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-gray-200 text-gray-800 rounded-full flex items-center py-2 px-3 mb-2 mr-2 "
          >
            <span>{tag}</span>
            <span
              className="text-red-500 ml-2 cursor-pointer"
              onClick={() => removeTags(index)}
            >
              <XMarkIcon className="h-5 w-5" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
