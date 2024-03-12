import React from 'react';

const Dropdown = ({ data, style }) => {
  const { options, selectedValue } = data;
  const handleChange = (event) => {
    console.log("Selected value:", event.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={selectedValue}
      style={style.webStyle}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown