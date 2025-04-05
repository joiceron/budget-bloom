import "./App.scss";
import BudgetOverviewPage from "./pages/BudgetOverviewPage/BudgetOverviewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [databaseOff, setDatabaseOff] = useState(true);

  return (
    <>
      <Header databaseOff={databaseOff} setDatabaseOff={setDatabaseOff} />
      <main className="main">
        <BudgetOverviewPage setDatabaseOff={setDatabaseOff} />
      </main>
      <Footer />
    </>
  );
}

export default App;
