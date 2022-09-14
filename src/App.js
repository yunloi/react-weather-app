import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />

        <footer>
          This project was coded by Yun Loi Lok and is{" "}
          <a
            href="https://github.com/yunloi/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          in{" "}
          <a
            href="https://clever-cactus-dd11c5.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
