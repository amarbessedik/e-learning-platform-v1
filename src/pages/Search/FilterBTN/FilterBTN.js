import React from 'react';

const FilterBTN = ({title, condition, callback}) => {
    return (
      <button
        onClick={callback}
        style={{
          background: condition ? "#fff" : "inherit",
          color: condition ? "#000" : "#fff",
        }}
      >
        {title}
      </button>
    );
}

export default FilterBTN;
