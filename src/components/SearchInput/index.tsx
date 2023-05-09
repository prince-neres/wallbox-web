interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
}: SearchInputProps) {
  return (
    <div className="px-5 w-full flex justify-center">
      <input
        className=" w-full sm:w-96 p-3 rounded outline-none text-black border-2 border-black"
        type="text"
        placeholder="Procurar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
