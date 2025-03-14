import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Counter = ({
  title = "Counter Example",
  initialCount = 100,
  backgroundColor = "lavender",
}) => {
  const [count, setCount] = useState(initialCount);
  const [bgColor, setBGColor] = useState(backgroundColor);
  // const counterHandler = () => {
  //   setCount(count - 1);
  // };
  function counterHandler() {
    return () => {
      setCount(count - 1);
    };
  }
  const resetHandler= (event) => {
    event.stopPropagation();
    setCount(initialCount);
  }
  return (
    <div
      className="counter"
      onClick={counterHandler()}
      onMouseEnter={()=>{setBGColor("Green")}}
      onMouseLeave={()=>{setBGColor(backgroundColor)}}
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h2>{title}</h2>
        <hr width="80%" />
      </div>
      <div>
        <h2>{count}</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          onClick={
             resetHandler}
        >
          <FontAwesomeIcon
            icon={faUndo}
            style={{ color: "red", fontSize: "24px" }}
          />
        </div>
        <div>{initialCount}</div>
      </div>
    </div>
  );
};
export default Counter;
