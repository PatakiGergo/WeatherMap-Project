import React from "react";
import "./ForecastCards.css";
import handleWeatherCode from "../Helper/weatherCode";
import handleWeatherIcons from "../Helper/weatherIcons";
import handleForecastImage from "../Helper/forecastImage";

export default function ForecastCards(props) {
  //handling the different weathers by it's position in the array provided
  const weatherType = handleWeatherCode(
    props.forecast.daily.weathercode[props.index]
  );
  const weatherIcon = handleWeatherIcons(
    props.forecast.daily.weathercode[props.index]
  );

  return (
    <div className="container" >
      <div className="weather-card" >
        
        <div
          className="image-section"
          style={{
            backgroundImage: `url(./src/assets/sevenday-${handleForecastImage(
              props.forecast.daily.weathercode[props.index]
            )}.jpg)`,
          }}
        >
          <img
            src={`../${weatherIcon}`}
            alt="Icon of weather"
            className="forecast-card-icon"
            
          />
          <div className="layer" ></div>
          <div className="weather"></div>
          <small className="type">{weatherType} </small>
        </div>
        <div className="info-section">
          <div className="contents">
            <h1>
              {props.forecast.daily.temperature_2m_max[props.index]}{" "}
              <span className="deg">&deg;</span>
            </h1>
            <h3>{props.information.name} </h3>
            <small>{props.forecast.daily.time[props.index]} </small>
          </div>
        </div>
      </div>
    </div>
  );
}