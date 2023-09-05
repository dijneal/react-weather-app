import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Oakland</h1>
      <ul>
        <li>Tuesday 4:00 PM</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          71°F
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 1% </li>
            <li> Humidity: 61% </li>
            <li> Wind: 11 mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
