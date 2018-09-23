import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Landing from './Landing'; 
import News from './News';
import Contact from './Contact';

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path='/' component={Landing}></Route>
                    <Route exact path='/news' component={News}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default Router;