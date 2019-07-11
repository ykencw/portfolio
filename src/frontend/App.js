import React from 'react';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import NavBar from './NavBar';
import SourceLink from './SourceLink';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className='App'>
          <div className='NavigableContent'>
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
          </div>
          <NavBar />
          <SourceLink />
        </div>
    );
  }
}


export default App;
