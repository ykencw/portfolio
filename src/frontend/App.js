import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <h1>Hello world!</h1>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/:path' component={NotFound} />
          </Switch>
        </div>
    );
  }
}


export default App;
