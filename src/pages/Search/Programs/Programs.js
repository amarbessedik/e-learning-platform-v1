import React from "react";
import Card from "../Card";

const Programs = ({programs}) => {
  return (
    <div className='programs__wrapper'>
      { programs.map(({title, img, description}, index) =>{
          return (
            <Card
              key={index}
              img={img}
              title={title}
              description={description}
              footer="footer_link"
            />
          );
        })
      }
    </div>
  );
};

export default Programs;
