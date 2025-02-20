import "./BudgetCard.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputTags from "../InputTags/InputTags";

export default function BudgetOverview({ numMonths, type }) {
  const baseUrl = import.meta.env.VITE_APP_URL;

  let numTags = Array(Number(numMonths)).fill("+");
  const [isfix, setIsFix] = useState(false);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`${baseUrl}budget`);
        setBalance(response.data.slice(0, numMonths));
      } catch (error) {
        console.error("Error fetching budget:", error);
      }
    };

    fetchBalance();
  }, [baseUrl, numMonths]);

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
          {balance.map((_, index) => (
            <p className="table-row__cell" key={index}>
              {balance[index].preview_balance}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
      {content}
      <div className="table-row">
        <h3 className="table-row__title">{`Total ${type}`}</h3>
        {balance.map((_, index) => (
          <p className="table-row__cell" key={index}>
            {type == "income"
              ? balance[index].total_income
              : type == "outcome"
              ? balance[index].total_outcome
              : balance[index].total_balance}
          </p>
        ))}
      </div>
    </article>
  );
}
