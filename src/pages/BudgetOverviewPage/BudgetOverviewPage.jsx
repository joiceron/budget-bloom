import { useState } from "react";
import "./BudgetOverviewPage.scss";
import BudgetOverview from "../../components/BudgetCard/BudgetCard";

export default function BudgetOverviewPage({ baseUrl }) {
  const months = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ];
  const [numMonths, setNumMonths] = useState(3);
  const toggleTrimestral = () => {
    setNumMonths(3);
  };
  const toggleSemestral = () => {
    setNumMonths(6);
  };
  const toggleAnnual = () => {
    setNumMonths(12);
  };

  return (
    <>
      <div className="view">
        <button
          className="view__button view__button--left"
          onClick={toggleTrimestral}
        >
          Trimestral view
        </button>
        <button className="view__button" onClick={toggleSemestral}>
          Semestral view
        </button>
        <button
          className="view__button view__button--rigth"
          onClick={toggleAnnual}
        >
          Annual view
        </button>
      </div>
      <div className="calendar">
        <span className="calendar__space"></span>
        {months
          .filter((_, index) => index < numMonths)
          .map((month, index) => (
            <h2 className="calendar__month" key={month}>
              {month}
            </h2>
          ))}
      </div>
      <BudgetOverview numMonths={numMonths} type={"income"} />
      <BudgetOverview numMonths={numMonths} type={"outcome"} />
      <BudgetOverview numMonths={numMonths} type={"balance"} />
      <div>
        <button>Clear</button>
        <button>Calculate</button>
      </div>
    </>
  );
}
