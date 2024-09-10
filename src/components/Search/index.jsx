import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "feather-icons-react";

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams({ search: search });
    setSearch("");
  }

  return (
    <div className="realtive w-full h-8">
      <div className="absolute flex  h-8 items-center " onClick={handleClick}>
        <Search className="w-7  text-greenUmbu mx-2" />
      </div>
      <input
        className="bg-bejeFundo shadow-md pl-12 rounded-lg w-full h-full  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-sky-500
      
     "
        placeholder={placeholder}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      />
    </div>
  );
}

export default SearchBar;
