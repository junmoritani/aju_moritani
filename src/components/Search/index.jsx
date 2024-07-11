import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search({ placeholder }) {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams({ search: search });
    setSearch("");
  }

  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      />
      <div onClick={handleClick}>Lupa</div>
    </div>
  );
}

export default Search;
