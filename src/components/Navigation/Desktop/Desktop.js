import React from "react";
import styles from "../Desktop/Desktop.module.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";

const Desktop = () => {
  return (
    <div className={styles.desktop__navigation}>
      <div className={styles.navbar__logo}><span>e</span>Learn</div>
      <ul>
        <li>
          <a href="/">Courses</a>
        </li>
        <li>
          <a href="/">Programs &amp; Degrees</a>
        </li>
        <li>
          <a href="/">Schools &amp; Partners</a>
        </li>
        <li>
          <a href="/">eLearn for Business</a>
        </li>
      </ul>
      <div className={styles.navbar__search}>
        <SearchIcon className={styles.search__icon}/>
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
