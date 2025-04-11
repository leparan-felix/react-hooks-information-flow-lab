// src/components/Filter.js
const Filter = ({ onCategoryChange }) => {
    return (
      <select role="combobox" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Vegetables">Vegetables</option>
      </select>
    );
  };
  
  export default Filter;
  