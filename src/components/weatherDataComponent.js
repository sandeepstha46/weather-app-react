import React, { Component } from 'react';
import '../assets/css/weather.css';

class weatherDataComponent extends Component {

    render() {

        const { weatherData } = this.props;

        const windSpeed = weatherData.wind.speed;
        const humidity = weatherData.main.humidity;
        const sunRiseTime = weatherData.sys.sunrise;
        const sunRiseCalculation = new Date(sunRiseTime * 1000);
        const sunRise = sunRiseCalculation.toLocaleTimeString();
        const sunSetTime = weatherData.sys.sunset;
        const sunSetCalculation = new Date(sunSetTime * 1000);
        const sunSet = sunSetCalculation.toLocaleTimeString();
        const minTempKelvin = weatherData.main.temp_min;
        const maxTempKelvin = weatherData.main.temp_max;
        const pressure = weatherData.main.pressure;

        // convert feels like from kelvin to celcius
        const feelsLike = (weatherData.main.feels_like - 273.15).toFixed(2);
        const minTemp = (minTempKelvin - 273.15).toFixed(2);
        const maxTemp = (maxTempKelvin - 273.15).toFixed(2);

        return (
            <div>
                <div className='container my-5'>
                    <div className="row list-data row-gap-4">
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Wind</p>
                                <p className='card-detail mb-1'>{windSpeed} m/s</p>
                                {/* <p className='card-description mb-0'>East</p> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Humidity</p>
                                <p className='card-detail mb-1'>{humidity}%</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Real feel</p>
                                <p className='card-detail mb-1'>{feelsLike}</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Min Temperature</p>
                                <p className='card-detail mb-1'>{minTemp}°C</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Max Temperature</p>
                                <p className='card-detail mb-1'>{maxTemp}°C</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Pressure</p>
                                <p className='card-detail mb-1'>{pressure}</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Sun Rise</p>
                                <p className='card-detail mb-1'>{sunRise}</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Sun Set</p>
                                <p className='card-detail mb-1'>{sunSet}</p>
                                <p className='card-description mb-0'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default weatherDataComponent;