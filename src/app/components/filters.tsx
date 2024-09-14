import { useState } from 'react';
import { Job } from '../../../types/job';

interface JobFiltersProps {
  onFilterChange: (query: string) => void;
}

export default function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onFilterChange(query);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a job..."
        className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
}
