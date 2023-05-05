interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
}: SearchInputProps) {
  return (
    <input
      className="mx-5 sm:w-96 p-3 rounded text-black border-2 border-black"
      type="text"
      placeholder="Procurar"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
