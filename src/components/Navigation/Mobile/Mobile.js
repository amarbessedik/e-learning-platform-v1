import React, { useState, } from "react";
import { Link } from 'react-router-dom';
import styles from "../Mobile/Mobile.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const Mobile = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
     setClicked(!clicked)
  }

  return (
    <div className={styles.mobile__navigation}>
      <div onClick={handleClick} className={styles.menu__icons__wrapper}>
        {clicked ? (
          <CloseIcon className={styles.menu__icon} />
        ) : (
          <MenuIcon className={styles.menu__icon} />
        )}
      </div>
      <div className={styles.mobile__logo}>
        <Link to="/">
          <span>e</span>Learn
        </Link>
      </div>
      <div>
        <SearchIcon className={styles.search__icon} />
      </div>
      {/* Side Menu */}
      <div
        style={{
          transform: clicked
            ? "translateX(0)"
            : "translateX(calc(-100%))",
          transition: "all .5s ease",
        }}
        className={styles.side__menu__wrapper}
      >
        <h1>side menu</h1>
      </div>
    </div>
  );
};

export default Mobile;
