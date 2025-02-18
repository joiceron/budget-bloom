import "./BudgetCard.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputTags from "../InputTags/InputTags";

export default function BudgetOverview({ numMonths, type }) {
  let numTags = Array(Number(numMonths)).fill("+");
  const [isfix, setIsFix] = useState(false);

  let content;
  if (type === "income") {
    content = (
      <div>
        <h2>Previous balance</h2>
        {numTags.map((_, index) => (
          <p key={index}>800</p>
        ))}
        <InputTags numMonths={numMonths} nameOfTrans={"Salary"} emoji={"💰"} />
        <InputTags numMonths={numMonths} nameOfTrans={"Extra"} emoji={"🤑"} />
        <h2>Total income</h2>
        {numTags.map((_, index) => (
          <p key={index}>800</p>
        ))}
      </div>
    );
  } else if (type === "outcome") {
    content = (
      <div>
        <InputTags numMonths={numMonths} nameOfTrans={"Rent"} emoji={"💰"} />
        <InputTags numMonths={numMonths} nameOfTrans={"Utilities"} emoji={"🤑"} />
        <InputTags numMonths={numMonths} nameOfTrans={"Food"} emoji={"🤑"} />
        <h2>Total outcome</h2>
        {numTags.map((_, index) => (
          <p key={index}>800</p>
        ))}
      </div>
    );
  } else if (type === "balance") {
    content = (
      <div>
        <h2>Total Balance</h2>
        {numTags.map((_, index) => (
          <p key={index}>800</p>
        ))}
      </div>
    );
  }

  return (
    <article className="card">
      <h2>{type}:</h2>
      {content}
    </article>
  );
}
