import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './../assets/kews_icon.png';
import './../css/navigation.css';

class Navigation extends Component {
  render() {
    return (
        <div className="main">
            <div className="nav-container">
                <div className="nav-title">
                    {/* <img src={logo} alt="Kews"/> */}
                    <span>kews</span>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/news'>News</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}

export default Navigation;