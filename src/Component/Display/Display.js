import React from 'react';
import './Display.css';
import Navbar from '../Navbar/Navbar';

const Display = (props) => {
    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weatherData;
    return (
        <div className="container">
            <div className='row weather'>
                <div className="col-md-4 image  align-items-center">
                    <h1>Weather finder</h1>
                    <h4>Find out temperature,conditions and more...</h4>
                    <img className="mainImg" src={`http://openweathermap.org/img/wn/${img}.png`} alt="weather-img" />
                </div>
                <div className="col-md-5 details">
                    <div className="weather-temp">
                        <h1>{temperature}<sup>o</sup>C , {description}</h1>
                        <h4>{location}</h4>
                        <p>{country}</p>
                    </div>
                    <div className="row row2">
                        <div className="col-sm weather-info">
                            <p><b>Wind Speed</b>(km/hr)</p>
                            <h2>{wind_speed}</h2>
                        </div>

                        <div className="col-sm weather-info">
                            <p><b>Preassure</b>(millibar)</p>
                            <h2>{pressure}</h2>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-sm weather-info">
                            <p><b>Precipitation</b>(mm)</p>
                            <h2>{precip}</h2>
                        </div>

                        <div className="col-sm weather-info">
                            <p><b>Humidity</b>(%)</p>
                            <h2>{humidity}</h2>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Display;