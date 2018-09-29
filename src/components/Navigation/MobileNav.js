import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/Navigation/MobileNav.css';

class MobileNav extends Component {

  render() {
    return (
        <div className="w3-hide-large">
            <nav className="k-mobile-nav">
                <ul>
                    <li><NavLink to='/kews-project/'><i className="fa fa-home fa-2x"></i></NavLink></li>
                    <li><NavLink to='/kews-project/news'><i className="fas fa-newspaper fa-2x"></i></NavLink></li>
                    <li><NavLink to='/kews-project/contact'><i className="fas fa-envelope fa-2x"></i></NavLink></li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default MobileNav;