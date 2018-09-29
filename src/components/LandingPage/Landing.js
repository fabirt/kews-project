import React, { Component } from 'react';
import LandingContent from './LandingContent';
import LandingTop from './LandingTop';

class Landing extends Component {

  render() {
    return (
        <div>
            <LandingTop/>
            <LandingContent/>
        </div>
    );
  }
}

export default Landing;