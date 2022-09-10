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
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3>">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Sydney</h1>
      <h2>Saturday, 10 September 16:00</h2>
      <div className="row">
        <div className="col-3">
          <span>icon image</span>
        </div>
        <div className="col-3">
          <ul>
            <li>Weather Description</li>
            <li>15℃</li>
          </ul>
          <h3>Now</h3>
        </div>
        <div className="col-6">
          <ul>
            <li>Max Temperature</li>
            <li>Min Temperature</li>
            <li>Wind</li>
            <li>Humidity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
