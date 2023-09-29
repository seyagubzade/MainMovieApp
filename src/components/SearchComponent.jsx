import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <form>
      <input
        type="text"
        className="textfield"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btnSearch" onClick={handleSearch}>
        <i className="fa-regular fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchComponent;
