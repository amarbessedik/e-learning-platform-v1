import React, { useState, useEffect } from "react";
import Desktop from "../Desktop/Desktop";
import Mobile from "../Mobile/Mobile";
import styles from "./Navbar.module.css";

const Navbar = () => { 
  const [desktop, setDesktop] = useState(true);
  
  const handleResize = () => {
    window.innerWidth < 960 ? setDesktop(false) : setDesktop(true);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });



  return (
    <div
      className={styles.navbar__wrapper}
    >
      {desktop ? <Desktop /> : <Mobile />}
    </div>
  );
};

export default Navbar;
