import React, { useState, useEffect } from "react";
import "./Partners.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Partner from "./Partner";
import institutions, { numberOfImages } from "./data";

const Partners = () => {
  const max = 9;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(numberOfImages());
  const [itemsToDisplay, setItemsToDisplay] = useState(
    institutions.slice(startIndex, endIndex)
  );

  const updateIndexes = () => {
    setEndIndex(numberOfImages());
    setItemsToDisplay(institutions.slice(startIndex, endIndex));
  };

  useEffect(() => {
    window.addEventListener("resize", updateIndexes);
    return () => window.removeEventListener("resize", updateIndexes);
  });

  const incrementIndexes = () => {
    if (endIndex < institutions.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
      setItemsToDisplay(institutions.slice(startIndex, endIndex));
    }
  };
  const decrementIndexes = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
      setItemsToDisplay(institutions.slice(startIndex, endIndex));
    }
  };

  

  return (
    <div className="partners">
      <div
        style={{
          pointerEvents: startIndex > 0 ? "visible" : "none",
          color: startIndex > 0 ? "#231F5E" : "#bbb",
        }}
        className="btn__prev"
      >
        <ArrowBackIosIcon
          onClick={decrementIndexes}
          className="btn"
          viewBox="-5 0 24 24"
        />
      </div>
      <div className="items__wrapper">
        <ul>
          {itemsToDisplay.map(({ imageUrl }, index) => (
            <li key={index}>
              <Partner imageUrl={imageUrl} />
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          pointerEvents: endIndex < max - 1 ? "visible" : "none",
          color: endIndex < max - 1 ? "#231F5E" : "#bbb",
        }}
        className="btn__next"
      >
        <ArrowForwardIosIcon onClick={incrementIndexes} className="btn" />
      </div>
    </div>
  );
};

export default Partners;
