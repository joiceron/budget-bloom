import BudgetOverviewPage from "./pages/BudgetOverviewPage/BudgetOverviewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
    {/* test without routes */}
      <Header />
      <main className="main">
        <BudgetOverviewPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
