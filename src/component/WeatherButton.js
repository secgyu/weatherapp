import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="menu-container">
      <Button variant={`${selectedCity === "current" ? "dark" : "warning"}`} onClick={() => handleCityChange("current")}>
        현재위치
      </Button>

      {cities.map((city, index) => (
        <Button key={index} variant={`${selectedCity === city ? "dark" : "warning"}`} onClick={() => handleCityChange(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
