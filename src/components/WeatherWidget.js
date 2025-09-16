import React, { useState, useEffect } from 'react';
import './WeatherWidget.css'; // We'll create this CSS file next

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '6d246f23c87800886a2c9347150cdaf7'; // <-- PASTE YOUR API KEY HERE

    const fetchWeather = (latitude, longitude) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch weather. Check API key.');
          return res.json();
        })
        .then(data => setWeatherData(data))
        .catch(err => setError(err.message));
    };
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => fetchWeather(position.coords.latitude, position.coords.longitude),
        () => setError('Location access denied. Please enable it in your browser settings.')
      );
    } else {
      setError('Geolocation not supported.');
    }
  }, []);

  if (error) return <div className="weather-container error">{error}</div>;
  if (!weatherData) return <div className="weather-container">Loading Weather...</div>;

  return (
    <div className="weather-container">
      <div className="weather-header">
        <img 
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
          alt={weatherData.weather[0].description}
          className="weather-main-icon"
        />
        <div className="weather-location-temp">
          <span className="location">{weatherData.name}</span>
          <span className="temperature">{Math.round(weatherData.main.temp)}°C</span>
        </div>
      </div>
      <div className="weather-details">
        <div className="detail-item">
          🌡️
          <span>Feels like: {Math.round(weatherData.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          💧
          <span>Humidity: {weatherData.main.humidity}%</span>
        </div>
        <div className="detail-item">
          💨
          <span>Wind: {weatherData.wind.speed.toFixed(1)} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;