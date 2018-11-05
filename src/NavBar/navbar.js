import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import Weather from '../Weather/weatherNav';
import EscKeyListener from '../TreePopup/escKeyPressClose';
import {LinkContainer} from 'react-router-bootstrap';


const CustomNavBar = () => (
        <div>
            <Navbar inverse collapseOnSelect id="homepageNav">
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <LinkContainer to="/AboutMe"><NavItem>Takoda Register</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/SideYard"><NavItem>Side Yard</NavItem></LinkContainer>
                        <LinkContainer to='/FrontYard'><NavItem> Front Yard </NavItem></LinkContainer>
                        <LinkContainer to='/Weather' id='weatherNav'><MenuItem>Weather</MenuItem></LinkContainer>
                        <LinkContainer to="/TicTacToe" id='ticTacToeNav'><MenuItem>Tic Tac Toe</MenuItem></LinkContainer>
                        {/*/!*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*!/*/}
                        {/*/!*<LinkContainer to='/Weather'><MenuItem>Weather</MenuItem></LinkContainer>*!/*/}
                        {/*/!*<LinkContainer to="/TicTacToe"><MenuItem>Tic Tac Toe</MenuItem></LinkContainer>*!/*/}
                        {/*/!*</NavDropdown>*!/*/}
                    </Nav>
                    <Nav pullRight>
                        <Weather />
                        {/*/!*<NavItem><IntroJs/></NavItem>*!/*/}
                    </Nav>
                </Navbar.Collapse>
                <EscKeyListener/>
            </Navbar>
        </div>
)

export default CustomNavBar;
