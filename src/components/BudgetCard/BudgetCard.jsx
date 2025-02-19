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
        <InputTags numMonths={numMonths} nameOfTrans={"Salary"} emoji={"💰"} />
        <InputTags numMonths={numMonths} nameOfTrans={"Extra"} emoji={"🤑"} />
      </div>
    );
  } else if (type === "outcome") {
    content = (
      <div>
        <InputTags numMonths={numMonths} nameOfTrans={"Rent"} emoji={"💸"} />
        <InputTags
          numMonths={numMonths}
          nameOfTrans={"Utilities"}
          emoji={"💸"}
        />
        <InputTags numMonths={numMonths} nameOfTrans={"Food"} emoji={"💸"} />
      </div>
    );
  } else if (type === "balance") {
    content = <div></div>;
  }

  return (
    <article className="card">
      <h2 className="card__title">{type}:</h2>
      {type === "income" ? (
        <div className="table-row table-row--borderless">
          <h3 className="table-row__title">Previous balance</h3>
          {numTags.map((_, index) => (
            <p className="table-row__cell" key={index}>
              900
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
      {content}
      <div className="table-row">
        <h3 className="table-row__title">{`Total ${type}`}</h3>
        {numTags.map((_, index) => (
          <p className="table-row__cell" key={index}>
            800
          </p>
        ))}
      </div>
    </article>
  );
}
