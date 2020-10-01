import React, { useState, } from "react";
import { Link } from 'react-router-dom';
import styles from "../Mobile/Mobile.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import SchoolIcon from "@material-ui/icons/School";

const Mobile = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
     setClicked(!clicked);
  }

  return (
    <div
      onClick={() => {if(clicked) setClicked(false)}}
      className={styles.mobile__navigation}
    >
      <div onClick={handleClick} className={styles.menu__icons__wrapper}>
        {clicked ? (
          <CloseIcon className={styles.menu__icon} />
        ) : (
          <MenuIcon className={styles.menu__icon} />
        )}
      </div>
      <div className={styles.mobile__logo}>
        <Link to="/">
          <span>e</span>Learn<SchoolIcon />
        </Link>
      </div>
      <div>
        <SearchIcon className={styles.search__icon} />
      </div>
      {/* Side Menu */}
      <div
        onClick={() => setClicked(false)}
        style={{
          transform: clicked
            ? "translateY(0)"
            : "translateY(calc(-100% - 80px))",
          transition: "all .5s ease",
        }}
        className={styles.side__menu__wrapper}
      >
        <div
          onClick={() => setClicked(false)}
          className={styles.side__menu__content}
        >
          <div className={styles.btn__container}>
            <Link className={styles.btn} to="/signin">
              Sign In
            </Link>
            <Link className={styles.btn} to="/register">
              Register
            </Link>
          </div>
          <div className={styles.nav__links__container}>
            <ul>
              <li>
                <Link className={styles.nav__link} to="/">
                  Courses
                </Link>
              </li>
              <li>
                <Link className={styles.nav__link} to="/">
                  Programs
                </Link>
              </li>
              <li>
                <Link className={styles.nav__link} to="/">
                  Online Master's Degree
                </Link>
              </li>
              <li>
                <Link className={styles.nav__link} to="/">
                  Schools &amp; Partners
                </Link>
              </li>
              <li>
                <Link className={styles.last__nav__link} to="/">
                  eLearn for Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
