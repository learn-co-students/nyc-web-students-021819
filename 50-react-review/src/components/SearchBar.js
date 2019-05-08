import React from "react";

const SearchBar = ({
  handleStockFilter,
  handleStockSort,
  filterBy,
  sortBy
}) => {
  console.log("sortBy is", sortBy);
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortBy === "alpha"}
          onChange={() => handleStockSort("alpha")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortBy === "price"}
          onChange={() => handleStockSort("price")}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select
          value={filterBy}
          onChange={e => handleStockFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
