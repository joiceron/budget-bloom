import "./InputTags.scss";
import { useState } from "react";

export default function InputTags({
  balance,
  nameOfTrans,
  emoji,
  setBalance,
}) {
  const [isFix, setIsFix] = useState("F");

  const toggleIsFix = () => setIsFix((prev) => !prev);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const updatedBalance = [...balance];
    updatedBalance[index] = {
      ...updatedBalance[index], 
      [nameOfTrans]: value,
    };
    setBalance(updatedBalance);
  };

  return (
    <div className="balance-row">
      <div className="balance-row__title">
        <h3 className="balance-row__title--text">{nameOfTrans}</h3>
        <button className="balance-row__title--button" onClick={toggleIsFix}>
          {isFix ? "Fix" : "Var"}
        </button>
        <button className="balance-row__title--button balance-row__title--emoji">
          {emoji}
        </button>
      </div>

      {balance.map((_, index) => (
        <label key={index} htmlFor={`${nameOfTrans}${index}`}>
          <input
            value={balance[index]?.[nameOfTrans] || "0.00"}
            className="balance-row__cell"
            id={`${nameOfTrans}${index}`}
            type="text"
            onChange={(event) => handleInputChange(event, index)}
          />
        </label>
      ))}
    </div>
  );
}
