import React from "react";
import PropTypes from "prop-types";
import { SearchContext } from "../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
      <div className="input-group flex-nowrap">
          <input
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Поиск"
          />
      </div>
  );
};
Search.propTypes = {
  searchValue: PropTypes.obj,
  setSearchValue: PropTypes.obj,
  SearchContext: PropTypes.obj
};

export default Search;
