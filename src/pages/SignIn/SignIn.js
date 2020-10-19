import React from 'react';
import './SignIn.css';
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const SignIn = () => {
    return (
      <div className="signin__page">
        <div className="signin__header">
          <p>
            First time here? <a className='help__link' href="/register">Create an Account</a>{" "}
          </p>
        </div>
        <div className="signin__credentials">
          <h2>Sign In</h2>
          <br />
          <form>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input 
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <button className='signin__btn' type="submit">Sign in</button>
          </form>
        <a className='help__link' href="/">Need help signing in?</a>
        <a className='help__link' href="/">Sign in with your company or school</a>
        </div>
        <div className="signin__social__media">
          <h2>or sign in with</h2>
          <div className='signin__btns'>
            <button className="social__media__btn apple">
              <AppleIcon className="social__media__icon"/> Apple
            </button>
            <button className="social__media__btn facebook">
              <FacebookIcon className="social__media__icon"/> Facebook
            </button>
            <button className="social__media__btn github">
              <GitHubIcon className="social__media__icon"/> Github
            </button>
            <button className="social__media__btn twitter">
              <TwitterIcon className="social__media__icon"/> Twitter
            </button>
          </div>
        </div>
      </div>
    );
}

export default SignIn;
