import React from "react";
import Card from "../Card";

const img1 =
  "https://prod-discovery.edx-cdn.org/media/programs/card_images/3178ea5b-b7a1-4439-a8b5-aad5df14af34-8a373ec30197.jpg";
const img2 =
  "https://prod-discovery.edx-cdn.org/media/programs/card_images/a3951294-926b-4247-8c3c-51c1e4347a15-270d6ce71d69.jpg";
const img3 =
  "https://prod-discovery.edx-cdn.org/media/programs/card_images/482dee71-e4b9-4b42-a47b-3e16bb69e8f2-cc94a82dea0f.jpg";
const img4 =
  "https://prod-discovery.edx-cdn.org/media/programs/card_images/9b729425-b524-4344-baaa-107abdee62c6-5b12ba753ecc.jpg";

const Programs = () => {
  return (
    <div className='programs__wrapper'>
      <Card
        img={img1}
        title="The Science of Happiness at Work"
        description="desc"
        footer="footer_link"
      />
      <Card
        img={img2}
        title="MBA Core Curriculum"
        description="desc"
        footer="footer_link"
      />
      <Card
        img={img3}
        title="Data Science"
        description="desc"
        footer="footer_link"
      />
      <Card
        img={img4}
        title="Design Thinking"
        description="desc"
        footer="footer_link"
      />
    </div>
  );
};

export default Programs;
