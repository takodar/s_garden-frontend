import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/stylesheets/index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import FrontYard from './FrontYard/frontYard';
import SideYardTreeHoverLocations from './SideYard/treeLocations';
import Board from './TIC TAC TOE/TIC-TAC-TOE';
import Weather from './Weather/weatherNav';
import WeatherFull from './Weather/weatherFull';
import AboutMe from './AboutMe/AboutMe';
import EscKeyListener from './TreePopup/escKeyPressClose';
import {LinkContainer} from 'react-router-bootstrap';
import IntroJs from './IntroJs';
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


const PageNavigation = () => (
    <Router>
        <div>
            <Navbar inverse collapseOnSelect id="homepageNav">
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <Link to='/AboutMe'>Takoda Register</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/SideYard"><NavItem>Side Yard</NavItem></LinkContainer>
                        <LinkContainer to='/FrontYard'><NavItem> Front Yard </NavItem></LinkContainer>
                        <LinkContainer to='/Weather' id='weatherNav'><MenuItem>Weather</MenuItem></LinkContainer>
                        <LinkContainer to="/TicTacToe"><MenuItem>Tic Tac Toe</MenuItem></LinkContainer>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*<LinkContainer to='/Weather'><MenuItem>Weather</MenuItem></LinkContainer>*/}
                        {/*<LinkContainer to="/TicTacToe"><MenuItem>Tic Tac Toe</MenuItem></LinkContainer>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav pullRight>
                        <Weather />
                        <NavItem><IntroJs/></NavItem>
                    </Nav>
                </Navbar.Collapse>
                <EscKeyListener/>
            </Navbar>


            <Route exact path="/" component={SideYardTreeHoverLocations}/>
            <Route path="/SideYard" component={SideYardTreeHoverLocations}/>
            <Route path="/FrontYard" component={FrontYardDisplay}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/TicTacToe" component={TicTacToe}/>
            <Route path="/Weather" component={WeatherFull}/>
            {/*<Route path="/HotNewHipHop" component={HotNewHipHop}/>*/}
        </div>
    </Router>
);


export default PageNavigation;

ReactDOM.render(
    <PageNavigation />,
    document.getElementById('root'),
);
