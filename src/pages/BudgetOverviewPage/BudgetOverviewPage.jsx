import "./BudgetOverviewPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import BudgetOverview from "../../components/BudgetCard/BudgetCard";
import startIcon from "../../assets/icons/star.svg";
import clearIcon from "../../assets/icons/delete_sweep.svg";

export default function BudgetOverviewPage({setDatabaseOff}) {
  // -=-=-=-=-=-=-=-=-=-=- Declarations -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  const baseUrl = import.meta.env.VITE_APP_URL;
  const giphyUrl = import.meta.env.VITE_GIPHY_URL;
  const giphyApiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const [gifSection, setGifSection] = useState([false, ""]);//false means that it will not show. Empty string for the query of the api call
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
  const [numMonths, setNumMonths] = useState(6);
  const [formData, setFormData] = useState({});
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const [index, setIndex] = useState(0);
  const [gif, setGif] = useState(null);
  const [clear, setClear] = useState(false);
// -=-=-=-=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//-=-=- Calculate the inputs
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

  //-=-=- Calculate the inputs
  useEffect(() => {
    if (shouldSendRequest && formData) {
      const sendPutRequest = async () => {
        try {
          await axios.put(`${baseUrl}budget/${index}`, formData);
          setShouldSendRequest(false);
          const response = await axios.get(`${baseUrl}budget`);
          setBalance(response.data.slice(0, numMonths));
          if (balance[numMonths - 1].total_balance < -100) {
            setGifSection([true, "bankruptcy"]);
          } else if (balance[numMonths - 1].total_balance < 10) {
            setGifSection([true, "poor"]);
          } else if (balance[numMonths - 1].total_balance < 100) {
            setGifSection([true, "almost+broke"]);
          } else if (balance[numMonths - 1].total_balance < 2000) {
            setGifSection([true, "money+shopping"]);
          } else {
            setGifSection([true, "happy+money+rich"]);
          }
        } catch (error) {
          console.error("Error updating budget:", error);
        }
      };
      sendPutRequest();
    }
  }, [formData, shouldSendRequest, baseUrl, numMonths, index]);

  useEffect(() => {
    if (gifSection[0] == true) {
      const sendGiphyRequest = async () => {
        try {
          const response = await axios.get(`${giphyUrl}`, {
            params: {
              api_key: giphyApiKey,
              tag: gifSection[1],
              rating: "pg",
            },
          });
          setGif(response.data.data.images.original.url);
          setGifSection([false, ""]);
        } catch (error) {
          console.error("Error Ghiphy request:", error);
          alert("Sorry we can no show a gif in this moment");
        }
      };

      sendGiphyRequest();
    }
  }, [gifSection, giphyApiKey, numMonths]);

  const handleCalculate = async () => {
    for (let i = 0; i < numMonths; i++) {
      setIndex(i + 1);
      await inputTagRetrieve(i);
    }
  };

  const handleClear = async () => {
    setClear(true);
  };

  if (!balance) {
    return <h2>Loading...</h2>;
  }

// -=-=-=-=-=-=-=-=-=-=- Return -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  return (
    <>
      <div className="view">
        <button
          className="view__button view__button--left"
          onClick={() => setNumMonths(3)}
          type="button"
        >
          Trimestral view
        </button>
        <button
          className="view__button view__button--center"
          onClick={() => setNumMonths(6)}
          type="button"
        >
          Semestral view
        </button>
        <button
          className="view__button view__button--right"
          onClick={() => setNumMonths(12)}
          type="button"
        >
          Annual view
        </button>
      </div>

      <div className="calendar">
        <span className="calendar__space"></span>
        {months.slice(0, numMonths).map((month) => (
          <h4 className="calendar__month" key={month}>
            {month}
          </h4>
        ))}
      </div>

      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="income"
        clear={clear}
        setClear={setClear}
      />
      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="expenses"
        clear={clear}
        setClear={setClear}
      />
      <BudgetOverview
        setBalance={setBalance}
        balance={balance}
        numMonths={numMonths}
        type="balance"
        clear={clear}
      />

      {gif ? (
        <section className="gif-section">
          <p className="gif-section__text">
            I hope you will have a nice day! Here is a random gif to describe
            your final situation at the end of this period. 😊
          </p>
          <img className="gif-section__gif" src={gif} alt="GIF" />
        </section>
      ) : (
        ""
      )}

      <div className="acctions">
        <button type="reset" onClick={handleClear} className="acctions__button">
          Clear
          <img src={clearIcon} alt="trash bin icon for the button Clean" />
        </button>
        <button
          className="acctions__button"
          type="submit"
          onClick={handleCalculate}
        >
          Calculate{" "}
          <img src={startIcon} alt="star icon for the button Calculate" />
        </button>
      </div>
    </>
  );
}
