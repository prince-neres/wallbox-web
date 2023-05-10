import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  Search: () => void;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  Search,
}: SearchInputProps) {
  return (
    <div className="px-5 w-full flex justify-center items-center">
      <div className="relative w-full sm:w-96">
        <input
          className="w-full p-3 pr-10 rounded outline-none text-black border-2 border-black"
          type="text"
          placeholder="Procurar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              Search();
            }
          }}
        />
        <button
          type="submit"
          onClick={Search}
          className="absolute top-0 right-0 h-full px-2 flex items-center text-light-text outline-none"
        >
          <MagnifyingGlassIcon className="hover:scale-105 w-6 h-6 mr-3 duration-100" />
        </button>
      </div>
    </div>
  );
}
