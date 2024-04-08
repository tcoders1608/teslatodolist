// src/Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
 const [weatherData, setWeatherData] = useState(null);
 const [city, setCity] = useState('New York');

 useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeather();
 }, [city]);

 return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.main.temp}°C</h3>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
 );
};

export default Weather;