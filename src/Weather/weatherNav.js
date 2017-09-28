/**
 * Created by takodaregister on 8/10/17.
 */
import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';

function myWeather(key, weathers) {
    if (key === 'weather') {
        return <div id="currentTemp">{weathers.main.temp}&deg;</div>;
    }
    else {
        return null;
    }
}

class Weather extends Component {
    state = {weathers: []};

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=03037&APPID=916847b6b7d2d1d9a152a66bf14d2095&units=imperial')
            .then(res => res.json())
            .then(weathers => this.setState({weathers}));
    }

    render() {
        return (
            <NavItem id="navWeather">
                {
                    Object.entries(this.state.weathers).map(([key, weather]) =>
                        <div id={key} key={key} className="weatherClass">
                            {myWeather(key, this.state.weathers)}
                        </div>

                    )}
            </NavItem>
        )
    }

}

export default Weather;


