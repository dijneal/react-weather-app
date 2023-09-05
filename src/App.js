import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <Weather />
        <footer>
          This project was coded by DiJonnae and is {""}
          <a
            href="https://github.com/dijneal/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-souced
          </a>
        </footer>
      </div>
    </div>
  );
}
