import React, { useState } from "react";
import "./Search.css";
import SearchOption from "./SearchOption";
import { subjects } from './data';

const Search = () => {
  const [subjectDropdown, setSubjectDropdown] = useState(false);
  const [partnerDropdown, setPartnerDropdown] = useState(false);
  const [programDropdown, setProgramDropdown] = useState(false);
  const [levelDropdown, setLevelDropdown] = useState(false);
  const [availabilityDropdown, setAvailabilityDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
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
            <div className="search__option__btn">
                <SearchOption title='Subject' 
                optionDropdown={subjectDropdown} 
                setOptionDropdown={setSubjectDropdown}
                options={subjects}/>
                <SearchOption title='Partner' 
                optionDropdown={partnerDropdown} 
                setOptionDropdown={setPartnerDropdown}
                options={['option1', 'option2']}/>
                <SearchOption title='Program' 
                optionDropdown={programDropdown} 
                setOptionDropdown={setProgramDropdown}
                options={['option1', 'option2']}/>
                <SearchOption title='Level' 
                optionDropdown={levelDropdown} 
                setOptionDropdown={setLevelDropdown}
                options={['option1', 'option2']}/>
                <SearchOption title='Availability' 
                optionDropdown={availabilityDropdown} 
                setOptionDropdown={setAvailabilityDropdown}
                options={['option1', 'option2']}/>
                <SearchOption title='Language' 
                optionDropdown={languageDropdown} 
                setOptionDropdown={setLanguageDropdown}
                options={['option1', 'option2']}/>
            </div>
          </div>
        </div>
      </div>
      <div className="search__results">all - courses - programs</div>
    </div>
  );
};

export default Search;

