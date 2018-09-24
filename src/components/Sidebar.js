import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../css/sidebar.css';
class Sidebar extends Component {
    constructor(props) {
        super();
        this.state = {
            sbDisplay: props.sbDisplay
        }
    }

    render() {
        return (
        <div>
            {/* Sidebar  */}
            <div className="w3-sidebar w3-animate-left w3-bar-block w3-border-right k-sb" style={{display:this.props.sbDisplay}} ref="mySidebar">
                <NavLink to="/" className="k-sb-item">
                    <i className="fa fa-home" ></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/news" className="k-sb-item">
                    <i className="fas fa-newspaper"></i>
                    <span>News</span>
                </NavLink>
                <NavLink to="/contact" className="k-sb-item">
                    <i className="fas fa-envelope"></i>
                    <span>Contact</span>
                </NavLink>
            </div>
            {/* Overlay  */}
            <div className="k-sb-overlay" ref="myOverlay" style={{display:this.props.sbDisplay}}></div>
        </div>
        );
    }
}

export default Sidebar;