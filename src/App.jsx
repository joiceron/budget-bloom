import "./App.scss";
import BudgetOverviewPage from "./pages/BudgetOverviewPage/BudgetOverviewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [serverOff, setServerOff] = useState(true);

  return (
    <>
      <Header serverOff={serverOff} setServerOff={setServerOff} />
      <main className="main">
        <BudgetOverviewPage serverOff={serverOff} setServerOff={setServerOff} />
      </main>
      <Footer />
    </>
  );
}

export default App;
