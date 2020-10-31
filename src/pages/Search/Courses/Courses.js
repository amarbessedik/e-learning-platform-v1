import React from 'react';
import Card from '../Card';

const Courses = ({courses}) => {
    return (
      <div className="courses__wrapper">
        {/* img, title, description, footer  */}
        {courses.map(({title, img, description}, index) => (
          <Card
            key={index}
            img={img}
            title={title}
            description={description}
            footer="Course"
          />
        ))}
      </div>
    );
}

export default Courses;
