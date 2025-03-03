import "./InputTags.scss";
import { useState, useEffect } from "react";

export default function InputTags({
  balance,
  nameOfTrans,
  emoji,
  setBalance,
  clear,
  setClear,
}) {
  const [isFix, setIsFix] = useState(false);

  const toggleIsFix = () => setIsFix((prev) => !prev);

  const handleClearInputs = () => {
    if (clear) {
      setBalance((prevBalance) => {
        const updatedBalance = prevBalance.map((entry) => ({
          ...entry,
          [nameOfTrans]: "0.00",
        }));
        return [...updatedBalance];
      });
      setClear(false);
    }
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (/^\d*\.?\d*$/.test(value)) {
      const updatedBalance = [...balance];
      if (!isFix) {
        updatedBalance.forEach((_, i) => {
          updatedBalance[i] = { ...updatedBalance[i], [nameOfTrans]: value };
        });
      } else {
        updatedBalance[index] = {
          ...updatedBalance[index],
          [nameOfTrans]: value,
        };
      }
      setBalance(updatedBalance);
    } else {
      alert("Please insert just numbers in this format 'x.xx'");
    }
  };

  useEffect(() => {
    handleClearInputs();
  }, [clear]);

  return (
    <div className="balance-row">
      <div className="balance-row__title">
        <h3 className="balance-row__title--text">
          <span>{nameOfTrans}</span>
        </h3>

        <button
          className={`balance-row__title--button ${
            isFix ? "" : "balance-row__title--highlight"
          }`}
          onClick={toggleIsFix}
        >
          {isFix ? "Var" : "Fix"}
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
            pattern="^\d*\.?\d*$"
            onChange={(event) => handleInputChange(event, index)}
          />
        </label>
      ))}
    </div>
  );
}
