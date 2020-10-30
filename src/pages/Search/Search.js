import React, { useState, useEffect } from "react";
import "./Search.css";
import SearchOption from "./SearchOption";
import {
  subjects,
  partners,
  programs,
  levels,
  availabilities,
  languages,
  _courses,
  _programs,
} from "./data";
import Courses from "./Courses/Courses";
import Programs from "./Programs/Programs";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [coursesDB, setCoursesDB] = useState(_courses);
  const [programsDB, setProgramsDB] = useState(_programs);

  useEffect(() => {
    filterArray(coursesDB, options);
    filterArray(programsDB, options);
  }, [options, coursesDB, programsDB]);

  const filterArray = (array, searchOptions) =>{
      if(searchOptions.length){
          const filtredArray = [];
      for(let i = 0; i < searchOptions.length; i++){
          console.log("searchOptions[i] >>> ", searchOptions[i]);
        for(let j = 0; j < array.length; j++){
            if(array[j].title.toLowerCase().includes(searchOptions[i])){
              filtredArray.push(array[j]);
              break;
            }
        }
      }
      return filtredArray;
      }

      return [];
  }
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

  const handleAll = () => {
    setAllActive(true);
    setCoursesActive(false);
    setProgramsActive(false);
  };
  const handleCourses = () => {
    setAllActive(false);
    setCoursesActive(true);
    setProgramsActive(false);
    setCoursesDB(_courses);
  };
  const handlePrograms = () => {
    setAllActive(false);
    setCoursesActive(false);
    setProgramsActive(true);
    setProgramsDB(_programs);
  };

  const handleChange = (e) => {
      e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourses = [];
    coursesDB.map((entry) =>{
        if (entry.title.toLowerCase().includes(searchTerm.toLowerCase()))
          newCourses.push(entry);
    return newCourses;      
    }
    );
    setCoursesDB(newCourses);
    const newPrograms = [];
    programsDB.map((entry) =>{
      if (entry.title.toLowerCase().includes(searchTerm.toLowerCase()))
        newPrograms.push(entry);
    return newPrograms;       
    });
    setProgramsDB(newPrograms);
    setSearchTerm('');
  };
  return (
    <div className="search__page">
      <div className="search__criteria__wrapper">
        <div className="search__criteria">
          <div className="search__box">
            <div className="input__wrapper">
              <form onSubmit={handleSubmit} className="course__search__form">
                <input
                  value={searchTerm}
                  onChange={handleChange}
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
      <div className="search__results">
        <div
          className="all__container"
          style={{ display: allActive ? "flex" : "none" }}
        >
          <br />
          <h1>All</h1>
          <br />
          <h2>Courses</h2>
          <br />
          <Courses courses={coursesDB} />
          <br />
          <h2>Programs</h2>
          <br />
          <Programs programs={programsDB} />
        </div>
        <div
          className="courses__container"
          style={{ display: coursesActive ? "flex" : "none" }}
        >
          <br />
          <h1>Courses</h1>
          <br />
          <Courses courses={coursesDB} />
        </div>
        <div
          className="programs__container"
          style={{ display: programsActive ? "flex" : "none" }}
        >
          <br />
          <h1>Programs</h1>
          <br />
          <Programs programs={programsDB} />
        </div>
      </div>
    </div>
  );
};

export default Search;
