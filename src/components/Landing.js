import React, { Component } from 'react';
import './../css/landing.css';
import pet from './../assets/koala_pet.png';

class Landing extends Component {
  render() {
    return (
      <div className="">
        <header>
            <div className="k-container">
                <div className="row">
                    <div className="title col-lg-6">
                        <h1 className="display-1">
                            Welcome to <span>KEWS</span>
                        </h1>
                        <p className="h1">
                            Your best place to connect with the world
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={pet} className="" alt="Pet"/>
                    </div>
                </div>
                
            </div>
        </header>
      </div>
    );
  }
}

export default Landing;