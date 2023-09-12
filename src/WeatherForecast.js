import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ff3fdecoac088fb37da86107cat4578b";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;

  axios.get(apiURL).then(handleResponse);
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
