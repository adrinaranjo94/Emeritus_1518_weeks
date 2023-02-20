import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name="Hola" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in Emeritus
        </a>
      </header>
    </div>
  );
}

export default App;
