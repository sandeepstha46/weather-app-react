import React, { Component } from 'react';
import '../assets/css/form.css';

class formComponent extends Component {
    state = {
        city: '',
        country: ''
    };


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.city, this.state.country);
        // Reset input
        this.setState({ city: '', country: '' });
    };

    render() {
        const { city, country } = this.state;
        return (
            <div className='div-form'>
                <form onSubmit={this.handleSubmit}>
                    <div className="d-flex column-gap-3 justify-content-center">
                        <div>
                            <input type="text" className="form-control" id="city" name='city' value={city} onChange={this.handleInputChange} placeholder='City' />
                        </div>
                        <div>
                            <input type="text" className="form-control" id="country" name='country' value={country} onChange={this.handleInputChange} placeholder='Country' />
                        </div>
                        <button className='btn btn-secondary' type='submit' >Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default formComponent;

