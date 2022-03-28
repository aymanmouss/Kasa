import React from "react";
import Data from "../../../Api/Data";
import "./style.css";
import { useParams } from "react-router-dom";
import Ratings from "../../Ratings/ratings";
import Tab from "../../Tab";
import Slider from "../../Slider";

function Accommodation({ width, title, tabText, picture }) {
  let { id } = useParams();
  let accommodation = Data.find((acc) => {
    return acc.id === id;
  });
  const equipements = () => {
    return accommodation.equipments.map((item, index) => {
      return (
        <>
          <span key={index} className='item'>
            {item}
          </span>{" "}
          <br />
        </>
      );
    });
  };

  return (
    <div>
      <Slider picture={accommodation.pictures} />
      <div className='accInformation'>
        <div className='acc-title-location'>
          <h1 className='accTitle'>{accommodation.title}</h1>
          <p className='accLocation'>{accommodation.location}</p>
        </div>
        <div className='host'>
          <p className='hostName'>{accommodation.host.name}</p>
          <img
            src={accommodation.host.picture}
            className='hostPhoto'
            alt='Host'
          />
        </div>
      </div>
      <div className='tags-rating'>
        <div className='tags'>
          {accommodation.tags.map((tag) => {
            return <p className='tag'>{tag}</p>;
          })}
        </div>
        <Ratings value={Number(accommodation.rating)} />
      </div>
      <div className='accTabs'>
        <Tab
          width={"100%"}
          title={"Description"}
          tabText={accommodation.description}
        />
        <Tab width={"100%"} title={"Équipements"} tabText={equipements()} />
      </div>
    </div>
  );
}
export default Accommodation;
