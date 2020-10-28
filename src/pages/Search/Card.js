import React from "react";

const Card = ({ img, title, description, footer }) => {
  return (
    <div className="little__card__wrapper">
      <div className="little__card__header">
        <img src={img} alt="" />
      </div>
      <div className="little__card__body__wrapper">
        <div className="little__card__body">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="little__card__footer">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;
