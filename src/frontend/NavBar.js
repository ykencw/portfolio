import React from 'react';
import NavLink from './NavLink';

import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stickied: false
        };
    }

    componentDidMount() {
        this.updateStickied();
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = event => {
        this.updateStickied();
    }

    updateStickied = () => {
        if (window.pageYOffset >= 200 && !this.state.stickied) {
            this.setState({
                stickied: true
            });
        } else if (window.pageYOffset < 200 && this.state.stickied) {
            this.setState({
                stickied: false
            });
        }
    }

    render() {
        return (<div className={`NavBar ${this.state.stickied ? 'sticky' : ''}`} onScroll={this.handleScroll}>
            <NavLink route='/' iconName='homeicon' linkName='Home' />
            <NavLink route='/Projects' iconName='projectsicon' linkName='Projects' />
            <NavLink route='/AboutMe' iconName='aboutmeicon' linkName='About Me' />
            <NavLink route='/Contact' iconName='contacticon' linkName='Contact' />
        </div>);
    }
}

export default NavBar;