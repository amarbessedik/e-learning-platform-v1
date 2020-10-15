import React from 'react';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import './Courses.css';

const Courses = () => {
    return (
      <div className="courses__container">
        <div className="courses__container__header">
          <h2>Courses By Subject</h2>
          <Link to="/">View All Courses</Link>
        </div>
        <div className="courses__container__body">
            <div className='course__link'>
                <ul>
                    <li><Link to="/">Architecture</Link></li>
                    <li><Link to="/">Art &amp; Culture</Link></li>
                    <li><Link to="/">Biology &amp; Life Sciences</Link></li>
                    <li><Link to="/">Business &amp; Management</Link></li>
                    <li><Link to="/">Chemistry</Link></li>
                    <li><Link to="/">Communication</Link></li>
                    <li><Link to="/">Computer Science</Link></li>
                    <li><Link to="/">Data Analysis &amp; Statistics</Link></li>
                    <li><Link to="/">Design</Link></li>
                </ul>
            </div>
            <div className='course__link'>
                <ul>
                    <li><Link to="/">Economy &amp; Finance</Link></li>
                    <li><Link to="/">Education &amp; Teacher Training</Link></li>
                    <li><Link to="/">Electronics</Link></li>
                    <li><Link to="/">Energy &amp; Earth Sciences</Link></li>
                    <li><Link to="/">Engineering</Link></li>
                    <li><Link to="/">Environmental Studies</Link></li>
                    <li><Link to="/">Ethics</Link></li>
                    <li><Link to="/">Food &amp; Nutrition</Link></li>
                    <li><Link to="/">Health &amp; Safety</Link></li>
                </ul>
            </div>
            <div className='course__link'>
                <ul>
                    <li><Link to="/">History</Link></li>
                    <li><Link to="/">Humanities</Link></li>
                    <li><Link to="/">Language</Link></li>
                    <li><Link to="/">Law</Link></li>
                    <li><Link to="/">Literature</Link></li>
                    <li><Link to="/">Math</Link></li>
                    <li><Link to="/">Medicine</Link></li>
                    <li><Link to="/">Music</Link></li>
                    <li><Link to="/">Philanthropy</Link></li>
                </ul>
            </div>
            <div className='course__link'>
                <ul>
                    <li><Link to="/">Phylosophy &amp; Ethics</Link></li>
                    <li><Link to="/">Physics</Link></li>
                    <li><Link to="/">Science</Link></li>
                    <li><Link to="/">Social Sciences</Link></li>
                    <li className='last__link'>
                        <Link to="/">All Subjects <DoubleArrowIcon /></Link>
                    </li>

                </ul>
            </div>
        </div>
      </div>
    );
}

export default Courses;
