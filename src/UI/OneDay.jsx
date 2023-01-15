import React from "react";
import "./OneDay.css";
import handleWeatherCode from "../Helper/weatherCode";
import handleWeatherIcons from "../Helper/weatherIcons";

export default function OneDay(props) {
  ///calculating time to display the proper data
  const temperature = Math.floor(props.daily.main.temp - 273.15) + "°C";
  const feelsLike = Math.floor(props.daily.main.feels_like - 273.15) + "°C";

  //átirni ezeket
  const minTemp = Math.floor(props.forecast.daily.temperature_2m_min[0]) + "°C";
  const maxTemp = Math.floor(props.forecast.daily.temperature_2m_max[0]) + "°C";

  const sunrise = new Date(props.daily.sys.sunrise * 1000)
    .toISOString()
    .substring(11, 16);
  const sunset = new Date(props.daily.sys.sunset * 1000)
    .toISOString()
    .substring(11, 16);

  const timezone =
    props.daily && props.daily.timezone ? props.daily.timezone : 0;

  const weatherType = handleWeatherCode(props.forecast.daily.weathercode[1]);
  const weatherIcon = handleWeatherIcons(props.forecast.daily.weathercode[1]);

  function getTimestampInSeconds() {
    let timestamp = Math.floor(Date.now() / 1000);
    if (timezone !== 0) timestamp += timezone;
    return new Date(timestamp * 1000).toISOString().substring(11, 16);
  }

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${props.background} )`,
      }}
    >
      <div className="main-data">
        <div className="main-text">
          <h1 className="city-name">{props.daily.name} </h1>
          <h2 className="weather-type">{weatherType}</h2>
          <h1 className="temperature">{temperature}</h1>
          <h4 className="feels-like">Feels like: {feelsLike}</h4>
          <h3>Wind: {props.daily.wind.speed} km/h</h3>
        </div>
        <div className="main-icon">
          <img
            src={weatherIcon}
            alt="Icon of weather"
            className="weather-icon"
          />
          <h2 className="time">Local time: {getTimestampInSeconds()} </h2>
        </div>
      </div>
      <div className="detailed-data">
        <div className="first-detailed-data">
          <h2 className="daily-data">Daily min: {minTemp} </h2>
          <h2 className="daily-data">
            Daily max: {maxTemp} ||{" "}
            <span className="attribute">
              {" "}
              Background image by: {props.attribution}, Icons by: FlatIcon
            </span>
          </h2>
        </div>
        <div className="second-detailed-data">
          <h2 className="daily-data">Sunrise: {sunrise} </h2>
          <h2 className="daily-data">Sunset: {sunset} </h2>
        </div>
      </div>
    </div>
  );
}
