import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import SearchIcon from "@material-ui/icons/Search";

const Hero = () => {
    return (
      <>
        <div className="hero">
          <div className="hero__title">
            <h2>
              Access 2500+ Online Courses from 140 Institutions. <br />
              Start Today!
            </h2>
            <Link to="/" className="hero__btn">
              Find Courses
            </Link>
          </div>
          <div className="hero__image"></div>
        </div>
        <div className="inline__search__container">
          <div className="inline__search__wrapper">
            <h2 className="search__title">What do you want to learn?</h2>
            <div className="search__form__wrapper">
              <form className="search__form">
                <label htmlFor="home-search"></label>
                <input type="text" id="home-search" placeholder="Search ..." />
                <div className="btn__submit__wrapper">
                  <a href="/" type="submit">
                    <SearchIcon className="submit__icon" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Hero;
