import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <h1>Hello world!</h1>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/portfolio'/>} />
            <Route exact path='/portfolio' component={Home} />
            <Route path='/portfolio/not-found' component={NotFound} />
            <Route path='/portfolio/:path' render={() => <Redirect to='/portfolio/not-found'/>} />
            <Route path='/:path' render={() => <Redirect to='/portfolio'/>} />
          </Switch>
        </div>
    );
  }
}


export default App;
