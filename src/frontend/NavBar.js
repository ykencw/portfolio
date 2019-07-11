import React from 'react';
import NavLink from './NavLink';
import SocialLink from './SocialLink';

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

    handleScroll = () => {
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
            <div className='socialLinks'>
                <SocialLink 
                    to='https://github.com/ykencw' 
                    iconName='githubicon' 
                    linkName='Github' />
                <SocialLink 
                    to='https://www.linkedin.com/in/richard-lan-a8396b18a/'
                    iconName='linkedinicon'
                    linkName='LinkedIn' />
                <SocialLink
                    to='mailto:yiukencw@gmail.com'
                    iconName='emailicon' 
                    linkName='Email' />
            </div>
            <div className='navLinks'>
                <NavLink 
                    to='Home' 
                    iconName='homeicon' 
                    linkName='Home' />
                <NavLink 
                    to='AboutMe' 
                    iconName='aboutmeicon' 
                    linkName='About Me' />
                <NavLink 
                    to='Projects' 
                    iconName='projectsicon' 
                    linkName='Projects' />
                <NavLink 
                    to='Contact' 
                    iconName='contacticon' 
                    linkName='Contact' />
            </div>
        </div>);
    }
}

export default NavBar;