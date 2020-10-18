import React, { useState } from "react";
import styles from "../Desktop/Desktop.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SchoolIcon from "@material-ui/icons/School";
import Courses from "./Courses";
import ProgramsAndDegrees from "./ProgramsAndDegrees";

const Desktop = () => {
  const [courses, setCourses] = useState(false);
  const [degrees, setDegrees] = useState(false);

  const resetDropdown = () => {
    if (courses) setCourses(false);
    if (degrees) setDegrees(false);
  };

  const handleCourses = () => {
    if (degrees) setDegrees(false);
    setCourses(!courses);
  };
  const handleDegrees = () => {
    if (courses) setCourses(false);
    setDegrees(!degrees);
  };

  const activeLinkStyle = {
    backgroundColor: "var(--blueColor)",
    color: "#fff",
  }; 


  return (
    <div className={styles.desktop__navigation}>
      <div className={styles.navbar__logo__wrapper}>
        <Link className={styles.navbar__logo} to="/">
          <span>e</span>Learn
          <SchoolIcon />
        </Link>
      </div>
      <ul>
        <li
          style={courses ? activeLinkStyle : null}
          onClick={handleCourses}
          onBlur={resetDropdown}
        >
          <Link style={courses ? { color: "#fff" } : null} to="/">
            <span>Courses</span>
            <ArrowDropDownIcon />
          </Link>
        </li>
        <li
          style={degrees ? activeLinkStyle : null}
          onClick={handleDegrees}
          onBlur={resetDropdown}
        >
          <Link style={degrees ? { color: "#fff" } : null} to="/">
            <span>Programs</span>
            <ArrowDropDownIcon />
          </Link>
        </li>
        <li>
          <Link to="/">Partners</Link>
        </li>
        <li>
          <Link to="/">eLearn for Business</Link>
        </li>
      </ul>
      <div
        className={styles.dropdown__container}
        style={{ display: courses ? "flex" : "none" }}
      >
        <Courses />
      </div>
      <div
        className={styles.dropdown__container}
        style={{ display: degrees ? "flex" : "none" }}
      >
        <ProgramsAndDegrees />
      </div>
      <div className={styles.navbar__search}>
        <SearchIcon className={styles.search__icon} />
        <Link to="/signin" className={styles.btn__signIn}>
          <span>Sign In</span>
        </Link>
        <Link to="/register" className={styles.btn__register}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Desktop;
