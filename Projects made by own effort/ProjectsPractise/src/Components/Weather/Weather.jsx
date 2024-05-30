import React, { useState } from "react";

export function Weather() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const API_key = `d1b0855082d1c12e1b323671691f90d2`;

  const getWeather = async () => {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("error msg", error);
      setWeatherData(null);
    }
    setLoading(false);
  };
 
  const onSubHandle = (e) => {
        e.preventDefault()
        getWeather()
  }

  return (
    <div>
        <form onSubmit={onSubHandle}>
            <input 
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="sumbit">Submit</button>
        </form>
        {loading ? <h3>Loading please wait!</h3> : null}
        {weatherData && (
            <div>
                {weatherData.cod === '404' ? (<h3>City not found</h3>) : 
                (<div>
                    <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
              <div>
                <h2>{weatherData.main.temp} ℃</h2>
                <h4>{weatherData.weather[0].main}</h4>
                <h1>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</h1>
                <h1>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</h1>
              </div>
                </div>)
                }
            </div>
        )}
    </div>
  )
}
