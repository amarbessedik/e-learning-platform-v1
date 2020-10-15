import React from "react";
import "./Subject.css";
import { Link } from "react-router-dom";

const Subject = ({ Icon, title, data }) => {
  return (
    <div className="subject__card">
      <div className="card__header">
        <div className="card__icon">{Icon}</div>
        <div className="card__title">{title}</div>
      </div>
      <div className="card__list">
        <ul>
          {data.map((link, index) => {
            return (
              <li>
                <Link to="/">{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Subject;
