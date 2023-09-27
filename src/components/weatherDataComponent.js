import React, { Component } from 'react';
import '../assets/css/weather.css';

class weatherDataComponent extends Component {

    render() {

        const { wind, main, sys } = this.props.weatherData;
        const { speed } = wind;
        const { humidity, temp_min, temp_max, pressure, feels_like } = main;
        const sunRise = new Date(sys.sunrise * 1000).toLocaleTimeString();
        const sunSet = new Date(sys.sunset * 1000).toLocaleTimeString();
        const minTemp = (temp_min - 273.15).toFixed(2);
        const maxTemp = (temp_max - 273.15).toFixed(2);


        return (
            <div>
                <div className='container my-5'>
                    <div className="row list-data row-gap-4">
                        <div className="col-md-3">
                            <div className="card">
                                <p className='card-title'>Wind</p>
                                <p className='card-detail mb-1'>{speed} m/s</p>
                                <p className='card-description mb-0'></p>
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
                                <p className='card-detail mb-1'>{feels_like}</p>
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