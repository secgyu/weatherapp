import React from "react";

const WeatherBox = ({ weather }) => {
  if (!weather || !weather.main) {
    return <div>No weather data available</div>;
  }

  const celsiusTemp = weather?.main.temp;
  const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {celsiusTemp}°C / {fahrenheitTemp.toFixed(2)}°F
      </h2>
      <h3>현재 날씨: {weather?.weather[0].description}</h3>
      <h5>
        최고온도:{weather?.main.temp_max} / 최저온도: {weather?.main.temp_min}
      </h5>
    </div>
  );
};

export default WeatherBox;
