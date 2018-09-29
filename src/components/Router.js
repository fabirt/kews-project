import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainNav from './Navigation/MainNav';
import Landing from './LandingPage/Landing'; 
import News from './NewsPage/News';
import Contact from './Contact';
import MobileNav from './Navigation/MobileNav';

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <MainNav/>
                <Switch>
                    <Route exact path='/kews-project/' component={Landing}></Route>
                    <Route exact path='/kews-project/news' component={News}></Route>
                    <Route exact path='/kews-project/contact' component={Contact}></Route>
                    <Route component={Landing}/>
                </Switch>
                <MobileNav/>
            </div>
        </BrowserRouter>
    );
  }
}

export default Router;