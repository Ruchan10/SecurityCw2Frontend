import React from 'react';

const FilterSection = () => {
  return (
    <div className="filter-section">
      <button className="filter-button">Filter</button>
      <div className="filter-options">
        <div className="filter-option">
          <h3>Job Type</h3>
        </div>

        <div className="filter-option">
          <h3>Position</h3>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className="filter-option">
          <h3>Salary</h3>
        </div>

        <div className="filter-option">
          <h3>Location</h3>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
