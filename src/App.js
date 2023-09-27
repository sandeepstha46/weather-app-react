import React, { Component } from 'react';
import Form from './components/formComponent';
import Weather from './components/weatherComponent';

import './App.css';

class App extends Component {
  state = {
    city: '',
    country: '',
  };

  handleFormSubmit = (city, country) => {
    this.setState({ city, country });
  };

  render() {

    const { city, country } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="app-title">
            <p className='title-name text-center'>Weather APP</p>
          </div>
          <Form onSubmit={this.handleFormSubmit} />
          <Weather city={city} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
