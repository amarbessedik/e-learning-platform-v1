import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import TranslateIcon from "@material-ui/icons/Translate";
import SchoolIcon from "@material-ui/icons/School";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
import google_play from "../../images/google_play.png";
import app_store from "../../images/app_store.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h1>
          <span>e</span>Learn <SchoolIcon />
        </h1>
        <div className="language__selector">
          <div className="language__icon__container">
            <TranslateIcon className="language__icon" />
          </div>
          <select className="language__dropdown" name="select" id="select">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <button className="language__btn" type="button">
            Apply
          </button>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__links">
          <div className="eLearn">
            <h2>eLearn</h2>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">eLearn for Business</Link>
              </li>
              <li>
                <Link to="/">Affiliates</Link>
              </li>
              <li>
                <Link to="/">Open eLearn</Link>
              </li>
              <li>
                <Link to="/">Careers News</Link>
              </li>
            </ul>
          </div>
          <div className="legal">
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="/">Terms of Service &amp; Honor Code </Link>
              </li>
              <li>
                <Link to="/">Privacy Policy </Link>
              </li>
              <li>
                <Link to="/">Accessibility Policy </Link>
              </li>
              <li>
                <Link to="/">Trademark Policy </Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="connect">
            <h2>Connect</h2>
            <ul>
              <li>
                <Link to="/">Blog </Link>
              </li>
              <li>
                <Link to="/">Contact Us </Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Media Kit </Link>
              </li>
              <li>
                <Link to="/">Donate </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__social__media">
          <div className="social__icons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <RedditIcon />
          </div>
          <div className="download__app__links">
            <div className="app__store app__download">
              <Link to="/">
                <img src={app_store} alt="app_store" />
              </Link>
            </div>
            <div className="google__play app__download">
              <Link to="/">
                <img src={google_play} alt="google_play" />
              </Link>
            </div>
          </div>
          <div className="copy__right">
            <p>&copy; amar bessedik. All rights reserved - 2020</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
