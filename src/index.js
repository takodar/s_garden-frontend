import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/stylesheets/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'),
);
