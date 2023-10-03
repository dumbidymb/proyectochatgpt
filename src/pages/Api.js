'use client'
import React, { useState } from 'react';
import "../style/api.css"

const Api = () => {
  const [inputVal, setInputVal] = useState('');
  const [cities, setCities] = useState([]);
  const [msg, setMsg] = useState('');
  const apiKey = '4d8fb5b93d4af21d66a2948710284366';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

        const newCity = {
          name: `${name}, ${sys.country}`,
          temperature: `${Math.round(main.temp)}°C`,
          description: weather[0].description,
          iconUrl: icon,
        };

        setCities([...cities, newCity]);
      } else {
        setMsg('City not found. Please try again.');
      }
    } catch (error) {
      setMsg('Error fetching data. Please try again later.');
    }

    setInputVal('');
  };

  return (
    <div>
      <div className="api">
        <div className="container">
          🌞 This demo needs an OpenWeather API key to work.{' '}
          <a target="_blank" href="https://home.openweathermap.org/users/sign_up">
            Get yours here for free!
          </a>
        </div>
      </div>
      <div className="conjunto">
        <section className="top-banner">
          <div className="container">
            <h1 className="heading">Simple Weather App</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for a city"
                autoFocus
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button type="submit">SUBMIT</button>
              <span className="msg">{msg}</span>
            </form>
          </div>
        </section>
        <section className="ajax-section">
          <div className="container">
            <ul className="cities">
              {cities.map((city, index) => (
                <li className="city" key={index}>
                  <h2 className="city-name">
                    <span>{city.name}</span>
                  </h2>
                  <div className="city-temp">{city.temperature}</div>
                  <figure>
                    <img className="city-icon" src={city.iconUrl} alt={city.description} />
                    <figcaption>{city.description}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <footer className="page-footer">
          <div className="container">
            <small>
              Made with <span>❤</span> by{' '}
              <a href="http://georgemartsoukos.com/" target="_blank">
                George Martsoukos
              </a>
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Api;
