import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oakland" />
        <footer>
          This project was coded by DiJonnae and is {""}
          <a
            href="https://github.com/dijneal/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-souced on GitHub
          </a>{" "}
          and
          <a
            href="https://adorable-gnome-1c989a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
