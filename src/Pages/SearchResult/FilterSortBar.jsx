import PropTypes from "prop-types";
import { useState } from "react";

const FilterSortBar = ({ onApplyFilters }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortBy, setSortBy] = useState("relevancy");

  const handleApplyFilters = () => {
    onApplyFilters(startDate, endDate, sortBy); // Pass individual arguments
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 bg-base-200 p-6 rounded-lg shadow-md">
      {/* Date Range */}
      <div className="flex flex-wrap gap-6">
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="end-date" className="block text-sm font-medium">
            End Date
          </label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label htmlFor="sort-by" className="block text-sm font-medium">
          Sort By
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="relevancy">Relevant</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Newest</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleApplyFilters}
        className="btn btn-primary text-white font-semibold w-full sm:w-auto mt-4 sm:mt-0"
      >
        Apply Filters
      </button>
    </div>
  );
};

FilterSortBar.propTypes = {
  onApplyFilters: PropTypes.func.isRequired, // Ensure it's passed as a required prop
};

export default FilterSortBar;
