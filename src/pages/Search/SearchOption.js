import React from "react";
import "./Search.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const SearchOption = ({ title, optionDropdown, setOptionDropdown, options }) => {

  return (
    <div
      onBlur={() => setOptionDropdown(false)}
      className="subject__container option__wrapper"
    >
      <button onClick={() => setOptionDropdown(!optionDropdown)}>
        <span>{title}</span> <ArrowDropDownIcon />
      </button>
      <div
        style={{ display: optionDropdown ? "block" : "none" }}
        className="option__dropdown"
      >
        <ul>
          {options.map((option) => {
            return (
              <li>
                <span>
                  <input type="checkbox" name="" id="" />
                  {option.subject}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchOption;
