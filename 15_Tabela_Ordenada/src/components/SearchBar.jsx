const SearchBar = ({ value, onChange }) => (
  <div className="flex items-center justify-center my-4">
    <input
      type="text"
      placeholder="🔍 Pesquisar..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700 placeholder-gray-400"
    />
  </div>
);

export default SearchBar;
