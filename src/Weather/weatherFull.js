/**
 * Created by takodaregister on 8/10/17.
 */
import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
const options = { weekday: 'long', month: 'long', day: 'numeric' };

function myWeather(weather) {
    let i;
    if(typeof weather !== 'undefined') {
        return <div className="col-lg-12">
        {Object.entries(weather).map(([key, weathers]) =>
            <div key={key} className="col-lg-4">
            <Panel collapsible defaultExpanded header={new Date(weathers['dt'] * 1000).toLocaleDateString('en-US', options)} id="pnlWeather" key={key}>
                <img src={"http://openweathermap.org/img/w/" + weathers['weather'][0]['icon'] + '.png'} />
                {weathers['temp']['max']}&deg;/{weathers['temp']['min']}&deg;
                <ListGroup fill>
                <ListGroupItem>{weathers['weather'][0]['description'].toUpperCase()}</ListGroupItem>
                <ListGroupItem>Humidity: {weathers['humidity']}</ListGroupItem>
                </ListGroup>
            </Panel>
            </div>
        )}
        </div>;
    }
}

class Weather extends Component {
    state = {weather: [], sevenDays: [] };

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?zip=03037&APPID=916847b6b7d2d1d9a152a66bf14d2095&units=imperial')
            .then(res => res.json())
            .then(weather => this.setState({weather}));
    }

    render() {
        return (
            <div style={{"padding":"20px 10px"}}>
                {
                    myWeather(this.state.weather['list'])
                }
            </div>
        )
    }

}

export default Weather;


