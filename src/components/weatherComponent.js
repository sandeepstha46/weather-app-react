import React, { Component } from "react";
import WeatherData from "./weatherDataComponent";
import '../assets/css/weather.css';

class WeatherComponent extends Component {
    state = {
        weatherData: null,
        isLoading: true, // Initialize as true to show "Loading..." initially
    }

    componentDidMount() {
        // Try to retrieve weather data from local storage
        const storedWeatherData = localStorage.getItem("weatherData");

        if (storedWeatherData) {
            // If data exists in local storage, parse and set it in the state
            this.setState({ weatherData: JSON.parse(storedWeatherData), isLoading: false });
        } else {
            // If data doesn't exist in local storage, fetch it
            this.fetchWeatherData(this.props.city, this.props.country);
        }
    }

    componentDidUpdate(prevProps) {
        // Check if the city and country have changed
        if (this.props.city !== prevProps.city || this.props.country !== prevProps.country) {
            this.fetchWeatherData(this.props.city, this.props.country);
        }
    }

    fetchWeatherData = (city, country) => {
        const apiKey = 'c3aafed8cdf3334581e4c4fc4dc18413';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Please check your internet connection');
                }
                return response.json();
            })
            .then((data) => {
                // Remove previous data from local storage
                localStorage.removeItem("weatherData");

                // Store the data in local storage
                localStorage.setItem("weatherData", JSON.stringify(data));
                this.setState({ weatherData: data, isLoading: false });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                this.setState({ isLoading: false });
            });
    };

    renderWeather() {
        const { weatherData } = this.state;

        if (!weatherData || weatherData.cod !== 200) {
            return (
                <div>
                    <p className="text-center mt-3 info">Please search for your desired location.</p>
                </div>
            );
        }

        // currrent date in this format Day, Month Date
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        const time = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        // Convert the temperature from Kelvin to Celsius
        const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);

        // Construct the URL for the weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

        return (
            <div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="text-center d-flex flex-column justify-content-between">
                                <div className="mt-5">
                                    <h2 className="location">{weatherData.name}, {weatherData.sys.country}</h2>
                                </div>
                                <div className="image-container">
                                    <img className="mt-1" src={iconUrl} alt={weatherData.weather[0].description} />
                                </div>
                                <div className="temp-desc">
                                    <h1 className="temperature-reading">{temperatureCelsius} <span className="reading-celcius">°C</span></h1>
                                    <h4 className="temperature-desc">{weatherData.weather[0].description}</h4>
                                </div>
                                <div className="current-time">
                                    <h5 className="mb-2">{time}</h5>
                                    <h5>{date}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-grid align-items-center">
                            <WeatherData weatherData={weatherData} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                {isLoading ? (
                    <p className="info text-center mt-3">Loading...</p>
                ) : (
                    <div>
                        {this.renderWeather()}
                    </div>
                )}
            </div>
        );
    }
}

export default WeatherComponent;
