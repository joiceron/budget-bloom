import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetOverviewPage from "./pages/BudgetOverviewPage/BudgetOverviewPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <main className="main">
        {/* <Routes> */}
        <Route path="/" element={<BudgetOverviewPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* </Routes> */}
      </main>
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
