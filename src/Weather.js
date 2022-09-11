import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.loaded) {
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
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
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
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">℃</span>
              </li>
              <h3>Now</h3>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>High: {Math.round(weatherData.maxTemperature)}℃</li>
              <li>Low: {Math.round(weatherData.minTemperature)}℃</li>
              <li>Wind: {Math.round(weatherData.wind)}m/s</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a86e9d84a9cef96d075ec236ba74b9d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
