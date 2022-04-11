import React from "react";
function getStar(value, index) {
  switch (value) {
    case 0:
      return (
        <i
          className='fa-solid fa-star'
          key={index}
          style={{ color: "#E3E3E3" }}
        ></i>
      );
    case 1:
      return (
        <i
          className='fa-solid fa-star'
          key={index}
          style={{ color: "#FF6060" }}
        ></i>
      );
    default:
      <i
        className='fa-solid fa-star'
        key={index}
        style={{ color: "#E3E3E3" }}
      ></i>;
  }
}
// function getStars(value) {
//   switch (value) {
//     case 0:
//       return [0, 0, 0, 0, 0];
//     case 1:
//       return [1, 0, 0, 0, 0];
//     case 2:
//       return [1, 1, 0, 0, 0];
//     case 3:
//       return [1, 1, 1, 0, 0];
//     case 4:
//       return [1, 1, 1, 1, 0];
//     case 5:
//       return [1, 1, 1, 1, 1];
//     default:
//       return [0, 0, 0, 0, 0];
//   }
// }
function getStars(value) {
  const stars = [];
  for (let i = 0; i < value; i++) stars.push(1);
  for (let i = value; i < 5; i++) stars.push(0);
  return stars;
}
function Ratings({ value }) {
  return (
    <div className='rating'>
      {getStars(value).map((value, index) => {
        return getStar(value, index);
      })}
    </div>
  );
}
export default Ratings;
