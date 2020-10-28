import React from 'react';
import Card from '../Card';
import {_courses} from '../data'

const Courses = () => {
    return (
      <div className="courses__wrapper">
        {/* img, title, description, footer  */}
        {_courses.map(({title, img}) => (
          <Card
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
