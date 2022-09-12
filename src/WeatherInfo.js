import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
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
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">℃</span>
            </li>
            <h3>Now</h3>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>High: {Math.round(props.data.maxTemperature)}℃</li>
            <li>Low: {Math.round(props.data.minTemperature)}℃</li>
            <li>Wind: {Math.round(props.data.wind)} m/s</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
