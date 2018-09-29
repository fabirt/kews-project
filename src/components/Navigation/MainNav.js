import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../css/Navigation/navigation.css';

class Navigation extends Component {

    // state = {
    //     sbDisplay: "none"
    // }

    // barsOnClick = () => {
    //     const displayMode = (this.state.sbDisplay=="none") ? 
    //     "block" : "none";
    //     this.setState({
    //         sbDisplay: displayMode
    //     });
    // }

  render() {
    return (
        <div className="top-nav">
            <div className="nav-container w3-hide-small w3-hide-medium">
                <div className="nav-title">
                    <span>kews</span>
                </div>
                <nav className="k-top-nav">
                    <ul>
                        <li><NavLink to='/kews-project/'>Home</NavLink></li>
                        <li><NavLink to='/kews-project/news'>News</NavLink></li>
                        <li><NavLink to='/kews-project/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            {/* <Sidebar sbDisplay={this.state.sbDisplay}/> */}
        </div>
    );
  }
}

export default Navigation;