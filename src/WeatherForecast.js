import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Monday </div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
            alt="clouds"
          ></img>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">67° </span>
            <span className="Forecast-temp-min">55° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
