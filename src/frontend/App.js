import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import NotFound from './NotFound';
import NavBar from './NavBar';
import SourceLink from './SourceLink';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <div className='NavigableContent'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Projects' component={Projects} />
              <Route path='/AboutMe' component={AboutMe} />
              <Route path='/Contact' component={Contact} />
              <Route path='/not-found' component={NotFound} />
              <Route path='/:path' render={() => <Redirect to='/not-found'/>} />
            </Switch>
          </div>
          <NavBar />
          <SourceLink />
        </div>
    );
  }
}


export default App;
