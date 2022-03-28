import React from "react";
import "./style.css";
import Data from "../../Api/Data";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <div className='cards'>
      {Data.map((data) => {
        return (
          <Link to={`/accommodation/${data.id}`} className='card' key={data.id}>
            <div className='overflow'></div>
            <img src={data.cover} alt='cover' width={340} height={340} />
            <p className='card-title'>{data.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default Cards;
