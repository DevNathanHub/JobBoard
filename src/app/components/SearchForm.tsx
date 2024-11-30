import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchFormProps {
  query: string;
  handleSearchSubmit: (event: React.FormEvent) => void;
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ query, handleSearchSubmit, handleQueryChange }) => (
  <form onSubmit={handleSearchSubmit} className="mb-2 flex items-center space-x-1 ">
    <input
      type="text"
      value={query}
      onChange={handleQueryChange}
      placeholder="Search for jobs (e.g., Writing Jobs in New-York, USA)"
      className="w-full pl-10 pr-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      aria-label="Search"
      className="p-3 bg-blue-500  text-white rounded-3xl hover:bg-blue-600 transition duration-300"
    >
      <FaSearch />
    </button>
  </form>
);

export default SearchForm;
