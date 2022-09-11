import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
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
        <div className="col-4 mt-2">
          <div className="clearfix">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>Description</li>
            <li>
              <span className="temperature">15</span>
              <span className="unit">℃</span>
            </li>
          </ul>
          <h3>Now</h3>
        </div>
        <div className="col-4">
          <ul>
            <li>High: ℃</li>
            <li>Low: ℃</li>
            <li>Wind: m/s</li>
            <li>Humidity: %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
