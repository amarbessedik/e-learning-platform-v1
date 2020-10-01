import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsAndDegrees.css';

const ProgramsAndDegrees = () => {
    return (
      <div className="programs__degrees__container">
        <div className="programs__degrees__header">
          <h2>Pathways for your advancement</h2>
        </div>
        <div className="programs__degrees__body">
          <div className="degrees">
            <Link to="/">MicroBachelors Program</Link>
            <p>Undergraduate-level, for career advancement or degree path</p>
          </div>
          <div className="degrees">
            <Link to="/">MicroMasters Program</Link>
            <p>Graduate-level, for career advancement or degree path</p>
          </div>
          <div className="degrees">
            <Link to="/">Professional Ceftificate</Link>
            <p>From employers or universities to build today's in-demand skills</p>
          </div>
          <div className="degrees">
            <Link to="/">Online Master's Degree</Link>
            <p>Top-ranked programs, affordable, and fully online</p>
          </div>
          <div className="degrees">
            <Link to="/">Global Freshman Academy</Link>
            <p>Freshman year courses for university credit from ASU</p>
          </div>
          <div className="degrees">
            <Link to="/">XSeries</Link>
            <p>Series of courses for business leaders for developing skills</p>
          </div>
          <div className="degrees">
            <Link to="/">Executive Education</Link>
            <p>Courses designed for business leaders for developing strategic skills</p>
          </div>
        </div>
      </div>
    );
}

export default ProgramsAndDegrees;
