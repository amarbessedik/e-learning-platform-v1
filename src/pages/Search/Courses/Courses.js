import React from 'react';
import Card from '../Card';
// import {_courses} from '../data';

const Courses = ({courses}) => {
    return (
      <div className="courses__wrapper">
        {/* img, title, description, footer  */}
        {courses.map(({title, img}, index) => (
          <Card
            key={index}
            img={img}
            title={title}
            description="desc"
            footer="footer_link"
          />
        ))}
      </div>
    );
}

export default Courses;
