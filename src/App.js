import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/stylesheets/index.css';
import {Route, Switch} from 'react-router-dom';
import FrontYard from './FrontYard/frontYard';
import SideYardTreeHoverLocations from './SideYard/treeLocations';
import Board from './TIC TAC TOE/TIC-TAC-TOE';
import CustomNavBar from './NavBar/navbar';
import WeatherFull from './Weather/weatherFull';
import AboutMe from './AboutMe/AboutMe';

// import IntroJs from './IntroJs';

class FrontYardDisplay extends Component {
    render() {
        return <FrontYard/>
    }
}

class TicTacToe extends Component {
    render() {
        return <div className="col-lg-12" id="boardGame">
            <Board /></div>;
    }
}

class App extends Component {
    render() {
        const App = () => (
                <div>
                    <CustomNavBar/>
                        <Route exact path="/" component={SideYardTreeHoverLocations}/>
                        <Route exact path="/SideYard" component={SideYardTreeHoverLocations}/>
                        <Route exact path="/FrontYard" component={FrontYardDisplay}/>
                        <Route exact path="/AboutMe" component={AboutMe}/>
                        <Route exact path="/TicTacToe" component={TicTacToe}/>
                        <Route exact path="/Weather" component={WeatherFull}/>

                </div>
        )
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;