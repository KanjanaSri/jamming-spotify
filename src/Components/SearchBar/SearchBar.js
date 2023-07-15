import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const search = useCallback(
    (e) => {
      e.preventDefault();
      props.onSearch(term);

      setTerm("");
    },
    [props, term]
  );

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  return (
    <form onSubmit={search}>
      <div className="SearchBar">
        <div className="quickLinks">
          <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-spotify"></i> Spotify
          </a>
        </div>
        <input
          placeholder="Enter A Song, Album, or Artist"
          value={term}
          onChange={handleTermChange}
        />
        <button className="SearchButton" onClick={search}>
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
