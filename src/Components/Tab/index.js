import React, { useState } from "react";
import "./style.css";
function Tab({ title, tabText, width }) {
  const [display, setDisplay] = useState("displaynone");
  const [show, setShow] = useState(true);
  const [collapsIcon, setCollapsIcon] = useState("fa-solid fa-angle-up");

  const showContents = () => {
    setShow(!show);
    show ? setDisplay("") : setDisplay("displaynone");
    show
      ? setCollapsIcon("fa-solid fa-angle-down")
      : setCollapsIcon("fa-solid fa-angle-up");
    console.log(display, show);
  };
  return (
    <div className='tab' style={{ maxWidth: width }}>
      <div className='tabHeader' onClick={showContents}>
        <p>{title}</p>
        <i className={collapsIcon}></i>
      </div>
      <div className={`${display} openTab`}>
        <div className='tabText'>{tabText}</div>
      </div>
    </div>
  );
}
export default Tab;
