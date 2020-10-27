import React, { useState } from "react";
import "./Search.css";
import SearchOption from "./SearchOption";
import {
  subjects,
  partners,
  programs,
  levels,
  availabilities,
  languages,
} from "./data";

const Search = () => {
  const [subjectDropdown, setSubjectDropdown] = useState(false);
  const [partnerDropdown, setPartnerDropdown] = useState(false);
  const [programDropdown, setProgramDropdown] = useState(false);
  const [levelDropdown, setLevelDropdown] = useState(false);
  const [availabilityDropdown, setAvailabilityDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [options, setOptions] = useState([]);
  const [allActive, setAllActive] = useState(true);
  const [coursesActive, setCoursesActive] = useState(false);
  const [programsActive, setProgramsActive] = useState(false);

  const resetDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(false);
    setProgramDropdown(false);
    setLevelDropdown(false);
    setAvailabilityDropdown(false);
    setLanguageDropdown(false);
  };
  const handleSubjectDropdown = () => {
    setSubjectDropdown(!subjectDropdown);
    setPartnerDropdown(false);
    setProgramDropdown(false);
    setLevelDropdown(false);
    setAvailabilityDropdown(false);
    setLanguageDropdown(false);
  };
  const handlePartnerDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(!partnerDropdown);
    setProgramDropdown(false);
    setLevelDropdown(false);
    setAvailabilityDropdown(false);
    setLanguageDropdown(false);
  };
  const handleProgramDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(false);
    setProgramDropdown(!programDropdown);
    setLevelDropdown(false);
    setAvailabilityDropdown(false);
    setLanguageDropdown(false);
  };
  const handleLevelDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(false);
    setProgramDropdown(false);
    setLevelDropdown(!levelDropdown);
    setAvailabilityDropdown(false);
    setLanguageDropdown(false);
  };
  const handleAvailabilityDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(false);
    setProgramDropdown(false);
    setLevelDropdown(false);
    setAvailabilityDropdown(!availabilityDropdown);
    setLanguageDropdown(false);
  };
  const handleLanguageDropdown = () => {
    setSubjectDropdown(false);
    setPartnerDropdown(false);
    setProgramDropdown(false);
    setLevelDropdown(false);
    setAvailabilityDropdown(false);
    setLanguageDropdown(!languageDropdown);
  };
  const addOption = (option) => {
    setOptions([...options, option]);
  };
  const removeOption = (optionToRemove) => {
    const newOptions = options.filter(
      (option) => option.title !== optionToRemove.title
    );
    setOptions(newOptions);
    document.getElementById(optionToRemove.id).checked = false;
  };

  const handleAll = () =>{
      setAllActive(true);
      setCoursesActive(false);
      setProgramsActive(false);
  }
  const handleCourses = () =>{
     setAllActive(false);
     setCoursesActive(true);
     setProgramsActive(false);
  }
  const handlePrograms = () =>{
   setAllActive(false);
   setCoursesActive(false);
   setProgramsActive(true);
  }

  return (
    <div className="search__page">
      <div className="search__criteria__wrapper">
        <div className="search__criteria">
          <div className="search__box">
            <div className="input__wrapper">
              <form className="course__search__form">
                <input
                  type="text"
                  placeholder="Search Courses and Programs ...."
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="search__dropdowns__wrapper">
            <div className="search__option__btns">
              <SearchOption
                title="Subject"
                optionDropdown={subjectDropdown}
                setOptionDropdown={handleSubjectDropdown}
                options={subjects}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
              <SearchOption
                title="Partner"
                optionDropdown={partnerDropdown}
                setOptionDropdown={handlePartnerDropdown}
                options={partners}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
              <SearchOption
                title="Program"
                optionDropdown={programDropdown}
                setOptionDropdown={handleProgramDropdown}
                options={programs}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
              <SearchOption
                title="Level"
                optionDropdown={levelDropdown}
                setOptionDropdown={handleLevelDropdown}
                options={levels}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
              <SearchOption
                title="Availability"
                optionDropdown={availabilityDropdown}
                setOptionDropdown={handleAvailabilityDropdown}
                options={availabilities}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
              <SearchOption
                title="Language"
                optionDropdown={languageDropdown}
                setOptionDropdown={handleLanguageDropdown}
                options={languages}
                resetDropdown={resetDropdown}
                addOption={addOption}
                removeOption={removeOption}
              />
            </div>
            {options.map((option, index) => {
              return (
                <span key={index} className="selected__option">
                  {option.title}
                  <button onClick={() => removeOption(option)}>X</button>
                </span>
              );
            })}
          </div>
          <div className="filter__btns__wrapper">
            <button
              onClick={handleAll}
              style={{
                background: allActive ? "#fff" : "inherit",
                color: allActive ? "#000" : "#fff",
              }}
            >
              All
            </button>
            <button
              onClick={handleCourses}
              style={{
                background: coursesActive ? "#fff" : "inherit",
                color: coursesActive ? "#000" : "#fff",
              }}
            >
              Courses
            </button>
            <button
              onClick={handlePrograms}
              style={{
                background: programsActive ? "#fff" : "inherit",
                color: programsActive ? "#000" : "#fff",
              }}
            >
              Programs
            </button>
          </div>
        </div>
      </div>
      <div className="search__results">all - courses - programs</div>
    </div>
  );
};

export default Search;
