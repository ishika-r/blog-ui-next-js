import React from "react";

interface Additional {
  add?: any;
}
const Search = ({ add }: Additional) => {
  return (
    <div className={`sidebar-box search-form-wrap  ${add}`}>
      <form action="#" className="sidebar-search-form">
        <span className="bi-search" />
        <input
          type="text"
          className="form-control"
          id="search"
          name="search"
          placeholder="Type a keyword and hit enter"
        />
      </form>
    </div>
  );
};

export default Search;
