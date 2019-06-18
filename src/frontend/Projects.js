import React from 'react';
import { Redirect } from 'react-router-dom';
import TopBar from './TopBar';

import './Projects.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if ((window.pageYOffset - window.innerHeight) >= document.body.offsetHeight) {
            this.setState({
                redirect: true
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/AboutMe' />;
        }

        return (<div className='Projects'>
            <TopBar backgroundName='backgroundprojects' pageTitle='Projects' />
            <div className='Content'>
                <h1>Projects:</h1>
                <div>
                    Blah blah projects blah blah Blah
                    <br />
                    <br />
                    <br />
                    <div className='item'>
                        <a className='Kodflix' href='https://kodiriyk.herokuapp.com/'>Kodflix: <img width="300px" height="auto" src={require(`./common/images/kodflixpreview.jpg`)} alt={`GitHub icon`} />
                        </a>
                    </div>
                    <br />
                    <br />
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    end of content
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>);
    }
}

export default Projects;