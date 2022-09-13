import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Day</div>{" "}
          <WeatherIcon code="01d" size={50} />
          <div className="WeatherForecast-data">
            <div>High: ℃</div>
            <div>Low: ℃</div>
            <div>Wind: m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
