import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="container">
        <div className="page-wrapper">
          <div className="todayBox">
            <form className="searchBar" id="search-city">
              <input type="search" id="search-input" placeholder="City" />
              <input type="submit" value="Search" />
              <input type="submit" id="local" value="My Location" />
            </form>

            <div className="row">
              <div className="col">
                <h1>
                  Portland
                  <br />
                </h1>
                <div className="topIcon">
                  <i className="fas fa-cloud"></i>
                </div>

                <h2 className="topTemp">48°</h2>
                <p className="topHighLow">H:48° L:36°</p>
              </div>

              <div className="col">
                <div className="info">
                  <p className="time">Last updated: Sun 12:00</p>
                  <p className="weather-description">Description: Cloudy</p>
                  <p className="wind">Wind speed: 4 mph</p>
                  <p className="humidity">Humidity: 20%</p>
                </div>
              </div>
            </div>
          </div>
          <p className="link">
            <a
              rel="noreferrer"
              href="https://github.com/JessKCode/reactWeather"
              target="_blank"
            >
              Open-source code
            </a>
            {""} by Jessica Carter
          </p>
        </div>
      </div>
    </div>
  );
}

