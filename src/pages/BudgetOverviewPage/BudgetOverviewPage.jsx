import { useState, useEffect } from "react";
import axios from "axios";
import "./BudgetOverviewPage.scss";
import BudgetOverview from "../../components/BudgetCard/BudgetCard";

export default function BudgetOverviewPage() {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const months = [
    "Jan",
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
  ];
  const [balance, setBalance] = useState([]);
  const [numMonths, setNumMonths] = useState(12);
  const [formData, setFormData] = useState({});
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleTrimestral = () => setNumMonths(3);
  const toggleSemestral = () => setNumMonths(6);
  const toggleAnnual = () => setNumMonths(12);

  const inputTagRetrieve = async (index) => {
    const newData = {};
    let inputs = [];
    let prev_balance = 0.0;

    if (index == 0) {
      prev_balance = parseFloat(
        document.getElementById(`previous_balance${index}`).innerText
      );
    } else {
      prev_balance = parseFloat(
        document.getElementById(`balance${index - 1}`).innerText
      );
    }

    inputs.push(document.getElementById(`salary${index}`));
    inputs.push(document.getElementById(`extras${index}`));
    inputs.push(document.getElementById(`rent${index}`));
    inputs.push(document.getElementById(`utilities${index}`));
    inputs.push(document.getElementById(`food${index}`));
    inputs.push(document.getElementById(`transportation${index}`));

    inputs.forEach((input) => {
      if (input) {
        newData[input.id.replace(/[0-9]+$/, "")] = input.value;
      }
    });

    newData["previous_balance"] = prev_balance;
    newData["total_income"] =
      parseFloat(newData["salary"]) +
      parseFloat(newData["extras"]) +
      prev_balance;
    newData["total_expenses"] =
      parseFloat(newData["rent"]) +
      parseFloat(newData["utilities"]) +
      parseFloat(newData["food"]) +
      parseFloat(newData["transportation"]);
    newData["total_balance"] =
      parseFloat(newData["total_income"]) -
      parseFloat(newData["total_expenses"]);

    setFormData(newData);
    setBalance((prevBalance) => {
      const updatedBalance = [...prevBalance];
      updatedBalance[index] = newData; 
      
      if (index + 1 < numMonths) {
        if (!updatedBalance[index + 1]) {
          updatedBalance[index + 1] = {}; 
        }
        updatedBalance[index + 1]["previous_balance"] =
          newData["total_balance"];
      }

      return updatedBalance;
    });
    setShouldSendRequest(true);
  };

  useEffect(() => {
    if (shouldSendRequest && formData) {
      const sendPutRequest = async () => {
        try {
          await axios.put(`${baseUrl}budget/${index}`, formData);
          setShouldSendRequest(false);
          const response = await axios.get(`${baseUrl}budget`);
          setBalance(response.data);
        } catch (error) {
          console.error("Error updating budget:", error);
        }
      };
      sendPutRequest();
    }
  }, [formData, shouldSendRequest, baseUrl, index]);

  const handleCalculate = async () => {
    for (let i = 0; i < 12; i++) {
      setIndex(i + 1);
      await inputTagRetrieve(i);
    }
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
          className="view__button view__button--right"
          onClick={toggleAnnual}
        >
          Annual view
        </button>
      </div>

      <div className="calendar">
        <span className="calendar__space"></span>
        {months.slice(0, numMonths).map((month) => (
          <h2 className="calendar__month" key={month}>
            {month}
          </h2>
        ))}
      </div>

      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="income"
        setFormData={setFormData}
      />
      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="expenses"
        setFormData={setFormData}
      />
      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="balance"
        setFormData={setFormData}
      />

      <div className="acctions">
        <button className="acctions__button view__button">Clear</button>
        <button
          className="acctions__button view__button"
          type="submit"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
    </>
  );
}
