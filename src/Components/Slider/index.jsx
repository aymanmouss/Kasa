import React, { useState } from "react";
import "./style.css";
function Slider({ picture }) {
  let [slide, setSlide] = useState(0);
  const Next = (setValue, value) => {
    value < picture.length - 1 ? setValue(value + 1) : setValue(0);
    return value;
  };
  const Previous = (setValue, value) => {
    value > 0 ? setValue(value - 1) : setValue(picture.length - 1);
    return value;
  };
  return (
    <div className='slider'>
      <img className='img-slider' src={picture[slide]} alt='Appartement' />
      <p className='previous' onClick={() => Previous(setSlide, slide)}>
        <i class='fa-solid fa-chevron-left'></i>
      </p>
      <p className='next' onClick={() => Next(setSlide, slide)}>
        <i class='fa-solid fa-chevron-right'></i>
      </p>
      <p className='pagination'>
        {slide + 1}/{picture.length}
      </p>
    </div>
  );
}
export default Slider;
