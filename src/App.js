import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const apiKey = 'Your APIKEY';

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Display an error message to the user if needed
    }
  }, [city, apiKey]);
  const imageUrl = `http://openweathermap.org/img/w/01n.png`;

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city, fetchData]);
  
  return (
    <div className="App">
      <h1>Weather</h1>
      <div className='search-bar'>
        <input
        type='text'
        placeholder='Enter city'
        value={city}
        onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => fetchData()}>🔍</button>
      </div>
      <img className="image" src={imageUrl} alt='weather icon' />
      <p>country: {weatherData.name}</p>
      <p>Temp: {weatherData.main.temp}</p>
      <p>Desc: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default App;
