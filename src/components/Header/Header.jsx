import "./Header.scss";
import logo from "/logo.svg";
import databaseIcon from "../../assets/icons/database.svg";
import databaseOffIcon from "../../assets/icons/database_off.svg";

export default function Header({ serverOff, setServerOff }) {
  //=-=-=-=-=-=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  const toggleDatabaseOff = () => {
    setServerOff((prevState) => !prevState);
  };

  //=-=-=-=-=-=-=-=-=-=-=- Return -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  return (
    <header className="header">
      <nav className="header__container">
        <div to={"/"} className="header__logo">
          <img
            src={logo}
            alt="Logo: A pink coin with a flower inside"
            className="header__logo--icon"
          />
          <h1 className="header__logo--text">Budget Bloom</h1>
        </div>

        {serverOff ? (
          <div onClick={toggleDatabaseOff} className="options">
            <img
              src={databaseOffIcon}
              alt="Working without installing a server"
              className="options__icon"
            />
          </div>
        ) : (
          <div onClick={toggleDatabaseOff} className="options">
            <p className="options__text">Demo with server</p>
            <img
              src={databaseIcon}
              alt="Working server with database"
              className="options__icon"
            />
          </div>
        )}
      </nav>
    </header>
  );
}
