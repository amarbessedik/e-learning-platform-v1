import React from 'react';
import './Register.css';
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Register = () => {
    return (
      <div className="register__page">
        <div className="register__header__wrapper">
          <div className="register__header">
            <p>
              Already have an eLearn account?
              <a className="help__link__register" href="/signin">
                Sign In
              </a>
            </p>
          </div>
        </div>
        <div className="register__form__wrapper">
          <h2>Create a new account here</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Public Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Country or Region of Residence" />
            <button className="register__btn" type="submit">
              Create Account
            </button>
          </form>
          <p>
            By creating an account, you agree to the{" "}
            <a className="help__link" href="/">
              Terms of Service and Honor Code
            </a>{" "}
            and you acknowledge that edX and each Member process your personal
            data in accordance with the{" "}
            <a className="help__link" href="/">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="register__social__media">
          <h2>Or create an account using</h2>
          <div className="register__btns">
            <button className="social__media__btn apple">
              <AppleIcon className="social__media__icon" /> Apple
            </button>
            <button className="social__media__btn facebook">
              <FacebookIcon className="social__media__icon" /> Facebook
            </button>
            <button className="social__media__btn github">
              <GitHubIcon className="social__media__icon" /> Github
            </button>
            <button className="social__media__btn twitter">
              <TwitterIcon className="social__media__icon" /> Twitter
            </button>
          </div>
        </div>
      </div>
    );
}

export default Register;
