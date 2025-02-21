import "./BudgetCard.scss";
import { useEffect } from "react";
import axios from "axios";
import InputTags from "../InputTags/InputTags";

export default function BudgetCard({ numMonths, type, setFormData, balance, setBalance }) {
  const baseUrl = import.meta.env.VITE_APP_URL;


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

  return (
    <article className="card">
      <h2 className="card__title">{type}:</h2>
      {type === "income" ? (
        <div className="table-row table-row--borderless">
          <h3 className="table-row__title">Previous balance</h3>
          {balance.map((_, index) => (
            <p className="table-row__cell" id={`previous_balance${index}`} key={index}>
              {balance[index].previous_balance}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
      {type === "income" && (
        <>
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="salary"
            emoji="💰"
            setFormData={setFormData}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="extras"
            emoji="🤑"
            setFormData={setFormData}
          />
        </>
      )}

      {type === "expenses" && (
        <>
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="rent"
            emoji="💸"
            setFormData={setFormData}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="utilities"
            emoji="💸"
            setFormData={setFormData}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="food"
            emoji="🍔"
            setFormData={setFormData}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="transportation"
            emoji="🚌"
            setFormData={setFormData}
          />
        </>
      )}

      <div className="table-row">
        <h3 className="table-row__title">{`Total ${type}`}</h3>
        {balance.map((_, index) => (
          <p className="table-row__cell" id={`${type}${index}`} key={index}>
            {type === "income"
              ? balance[index]?.total_income
              : type === "expenses"
              ? balance[index]?.total_expenses
              : balance[index]?.total_balance}
          </p>
        ))}
      </div>
    </article>
  );
}
