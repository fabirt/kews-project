import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './../assets/kews_icon.png';
import './../css/navigation.css';

class Navigation extends Component {

    barsOnClick = () => {
        const mySidebar = this.refs.mySidebar;
        const myOverlay = this.refs.myOverlay;
        mySidebar.style.display = "block";
        myOverlay.style.display = "block";
    }
    
    overlayOnClick = () => {
        const mySidebar = this.refs.mySidebar;
        const myOverlay = this.refs.myOverlay;
        mySidebar.style.display = "none";
        myOverlay.style.display = "none";
    }

  render() {
    return (
        <div className="main">
            <div className="nav-container">
                <div className="nav-title w3-hide-small w3-hide-medium">
                    {/* <img src={logo} alt="Kews"/> */}
                    <span>kews</span>
                </div>
                <nav className="w3-hide-small w3-hide-medium">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/news'>News</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="nav-container-mob">
                <button className="w3-xlarge w3-hide-large k-bars" onClick={this.barsOnClick}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            {/* Sidebar  */}
            <div className="w3-sidebar w3-animate-left w3-bar-block w3-border-right k-sidebar" style={{display:"none"}} ref="mySidebar">
                <a className="k-bar-item">
                    Home
                </a>
                <a className="k-bar-item">
                    News
                </a>
                <a className="k-bar-item">
                    Contact
                </a>
            </div>
            {/* Overlay  */}
            <div className="w3-overlay" ref="myOverlay" onClick={this.overlayOnClick}></div>

        </div>
    );
  }
}

export default Navigation;