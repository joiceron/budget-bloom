import "./InputTags.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function InputTags({ numMonths, nameOfTrans, emoji }) {
  let numTags = Array(Number(numMonths)).fill("+");
  const [isfix, setIsFix] = useState(false);
  const toggleIsFix = () => {
    setIsFix((prev) => !prev);
  };

  return (
    <div className="balance-row">
      <div className="balance-row__title">
        <h3 className="balance-row__title--text">{nameOfTrans}</h3>
        <button className="balance-row__title--button" onClick={toggleIsFix}>
          {isfix ? "Fix" : "Var"}
        </button>
        <button className="balance-row__title--button balance-row__title--emoji">{emoji}</button>
      </div>
      {numTags.map((_, index) => (
        <label key={index} htmlFor="">
          <input className="balance-row__cell" type="text" />
        </label>
      ))}
    </div>
  );
}
