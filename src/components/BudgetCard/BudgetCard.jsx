import "./BudgetCard.scss";
import { useEffect } from "react";
import axios from "axios";
import InputTags from "../InputTags/InputTags";

export default function BudgetCard({
  numMonths,
  type,
  balance,
  setBalance,
  clear,
  setClear,
  serverOff,
}) {
  //=-=-=-=-=-=-=-=-=-=-=-=- Declarations -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  const baseUrl = import.meta.env.VITE_APP_URL;

  //=-=-=-=-=-=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  useEffect(() => {
    if (serverOff === false) {
      const fetchBalance = async () => {
        try {
          const response = await axios.get(`${baseUrl}budget`);
          setBalance(response.data.slice(0, numMonths));
        } catch (error) {
          console.error("Error fetching budget:", error);
        }
      };
      fetchBalance();
    } else {
      setBalance([
        {
          month: "01",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "02",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "03",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "04",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "05",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "06",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "07",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "08",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "09",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "10",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "11",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
        {
          month: "12",
          year: 2025,
          total_balance: "500.00",
          previous_balance: "0.00",
          total_income: "1700.00",
         total_expenses: "1200.00",
          salary: "1300.00",
          extras: "400.00",
          rent: "600.00",
          food: "300.00",
          utilities: "200.00",
          transportation: "100.00",
        },
      ].slice(0, numMonths));
    }
  }, [baseUrl, numMonths]);

  //=-=-=-=-=-=-=-=-=-=-=- Return -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  return (
    <article className="card">
      <h2 className="card__title">{type}</h2>
      {type === "income" ? (
        <div className="table-row table-row--borderless">
          <h3 className="table-row__title">Previous balance:</h3>
          {balance.map((_, index) => (
            <p
              className="table-row__cell"
              id={`previous_balance${index}`}
              key={index}
            >
              {balance[index].previous_balance }
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
            clear={clear}
            setClear={setClear}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="extras"
            emoji="🤑"
            clear={clear}
            setClear={setClear}
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
            clear={clear}
            setClear={setClear}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="utilities"
            emoji="💸"
            clear={clear}
            setClear={setClear}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="food"
            emoji="🍔"
            clear={clear}
            setClear={setClear}
          />
          <InputTags
            setBalance={setBalance}
            balance={balance}
            nameOfTrans="transportation"
            emoji="🚌"
            clear={clear}
            setClear={setClear}
          />
        </>
      )}

      <div className="table-row">
        <h3 className="table-row__title">{`Total ${type}:`}</h3>
        {balance.map((_, index) => (
          <p
            className={`table-row__cell ${
              balance[index].total_balance < 0 && type === "balance"
                ? "table-row__cell--red"
                : type === "balance"
                ? "table-row__cell--green"
                : ""
            }`}
            id={`${type}${index}`}
            key={index}
          >
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
