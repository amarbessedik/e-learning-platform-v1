import React from "react";
import "./Search.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const SearchOption = ({
  title,
  optionDropdown,
  setOptionDropdown,
  options,
  resetDropdown,
  addOption,
  removeOption,
}) => {
  return (
    <div
      onChange={resetDropdown}
      className="subject__container option__wrapper"
    >
      <button onClick={() => setOptionDropdown(!optionDropdown)}>
        <span>{title}</span> <ArrowDropDownIcon />
      </button>
      <div
        style={{ display: optionDropdown ? "block" : "none", zIndex: 999 }}
        className="option__dropdown"
      >
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <input
                  onClick={() => {
                    console.log('checked? >>> ',document.getElementById(option.id).checked);
                    setOptionDropdown(true);
                    document.getElementById(option.id).checked
                      ? addOption(option)
                      : removeOption(option);
                  }}
                  type="checkbox"
                  name="checkbox"
                  id={option.id}
                />
                <span className='option__title'>{option.title}</span> <span className='option__number'>{option.number}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchOption;
