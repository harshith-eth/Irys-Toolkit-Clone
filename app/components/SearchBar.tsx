import React, { useState } from 'react';
import { Button } from './ui/button';

interface SearchBarProps {
  onSearch: (id: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter data ID"
        className="flex-grow p-2 border rounded-l-md"
      />
      <Button type="submit" className="rounded-l-none">Search</Button>
    </form>
  );
};

export default SearchBar;
