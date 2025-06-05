import React, { useState } from 'react';


function Header({ onSearch, currentCity }) {
  const [searchText, setSearchText] = useState('Toshkent');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onSearch(searchText); 
      setSearchText('');
    }
  };

  return (

    <header className="container mb-8 pb-5 border-b border-white border-opacity-10">
      <h1 className="text-4xl mb-2 text-blue-400">Weather App</h1> 
      <p className="text-lg text-gray-300 mb-5">
        Current City:
        <span className="font-bold text-white ml-1">{currentCity}</span> 
      </p>
      <form className="flex justify-center gap-2 md:flex-col md:items-center md:gap-2" onSubmit={handleSearchSubmit}>

        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Enter city name..."  className="p-3.5 px-5 border-none rounded-md text-lg w-full max-w-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" 
        />
        <button
          type="submit"
          className="py-3 px-6 bg-blue-500 text-gray-900 border-none rounded-md cursor-pointer text-lg transition-colors duration-300 hover:bg-blue-400 md:w-11/12" 
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
