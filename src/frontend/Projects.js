import React from 'react';
import TopBar from './TopBar';

import './Projects.css'

class Projects extends React.Component {render() {
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
                    <div className='item'>
                        <a className='Kodflix' href='https://kodiriyk.herokuapp.com/'>Placeholder: <img width="300px" height="auto" src={require(`./common/images/kodflixpreview.jpg`)} alt={`GitHub icon`} />
                        </a>
                    </div>
                    <div className='item'>
                        <a className='Kodflix' href='https://kodiriyk.herokuapp.com/'>Placeholder: <img width="300px" height="auto" src={require(`./common/images/kodflixpreview.jpg`)} alt={`GitHub icon`} />
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