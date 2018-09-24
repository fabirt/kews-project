import React, { Component } from 'react';
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
                <a className="k-sb-item">
                    Home
                </a>
                <a className="k-sb-item">
                    News
                </a>
                <a className="k-sb-item">
                    Contact
                </a>
            </div>
            {/* Overlay  */}
            <div className="k-sb-overlay" ref="myOverlay" style={{display:this.props.sbDisplay}}></div>
        </div>
        );
    }
}

export default Sidebar;