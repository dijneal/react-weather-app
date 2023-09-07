import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahren");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahren(event) {
    event.preventDefault();
    setUnit("fahren");
  }

  if (unit === "fahren") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.fahren)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = ((props.fahren - 32) * 5) / 9;

    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(celcius)}</span>
        <span className="unit">
          <a href="/" onClick={showFahren}>
            {" "}
            °F{" "}
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
