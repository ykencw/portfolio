import React from 'react';
import TopBar from './TopBar';

const AboutMe = () => {
    return (<div>
        <TopBar backgroundName='backgroundaboutme' pageTitle='About Me' />
        <div className='Content'>
            <h1>About Me:</h1>
            <div>
                content content me about content content
            </div>
        </div>
    </div>);
}

export default AboutMe;