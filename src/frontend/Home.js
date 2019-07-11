import React from 'react';
import TopBar from './TopBar';

import './Home.css';

class Home extends React.Component {
    render() {
        return(<div id='Home'>
            <TopBar backgroundName='backgroundhome' pageTitle='Home' />
            <div className='Content'>
                <h1>Home:</h1>
                <div>
                    This is the home, blah blah home<br/>
                    content content content<br/>
                    <br/>
                    <div className='container'>
                        <div className='item'>
                            <a href='https://github.com/ykencw'>
                                <div className='GitHub'>
                                    <div>View work!</div>
                                    <img src={require(`./common/images/githublogo.png`)} alt={`GitHub icon`} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <br/>
                    more content<br/>
                    <br/>
                    <br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    <br/>
                    <br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    content content content<br/>
                    <br/>
                    <br/>
                    a lot more content<br/>
                    <br/>
                    <br/>
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    it just keeps going<br />
                    <br />
                    <br />
                    <br />
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

export default Home;