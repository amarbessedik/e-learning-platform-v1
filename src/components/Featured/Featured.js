import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__left">
        <h2>New! Power Searching with Google XSeries Certificate</h2>
        <p>Google search techniques and tools from a Google expert</p>
        <div className="btn__learn__more">
          <button type="button">Learn More</button>
        </div>
      </div>
      <div className="featured__right">
        <h1>
          <span className="g_letter_1">G</span>
          <span className="o_letter_1">o</span>
          <span className="o_letter_2">o</span>
          <span className="g_letter_2">g</span>
          <span className="l_letter">l</span>
          <span className="e_letter">e</span>
        </h1>
      </div>
    </div>
  );
};

export default Featured;
