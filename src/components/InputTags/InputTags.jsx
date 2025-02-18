import "./InputTags.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function InputTags({ numMonths, nameOfTrans, emoji }) {
  let numTags = Array(Number(numMonths)).fill("+");
  const [isfix, setIsFix] = useState(false);
  const toggleIsFix= () => {
    setIsFix((prev) => !prev);
  };

  return (
    <div className="">
      <button onClick={toggleIsFix}>{isfix ? "Fixed" : "Variable"}</button>
      <h2>{nameOfTrans}</h2>
      <span>{emoji}</span>
      {numTags.map((_, index) => (
        <label key={index} htmlFor="">
          <input type="text" />
        </label>
      ))}
    </div>
  );
}
