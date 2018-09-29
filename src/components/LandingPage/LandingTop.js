import React, { Component } from 'react';
import './../../css/LandingPage/LandingTop.css';

class LandingTop extends Component {

  render() {
    return (
        <div className="top-nav w3-hide-large">
            <div className="nav-container-mob">
                <div className="k-logo"></div>
                <div className="k-nav-title">Kews</div>
            </div>
        </div>
    );
  }
}

export default LandingTop;