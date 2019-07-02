import React from 'react';
import './Style.css';
// import {BrowserRouter as Router, Link} from './react-router-dom';
// import Route from './react-router-dom/Route';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Logo from './logo.png'

function Header() {
    return (
        <Router>
            <div>
                <div className="header">
                    <div className="nav-logo">
                        <h1>Hotel Booking</h1>
                    </div>
                    {/* <ul className="nav">
                        <li><a href='/'>Home</a></li>
                    </ul> */}
            
                </div>
            </div>
        </Router>
    )
}

export default Header