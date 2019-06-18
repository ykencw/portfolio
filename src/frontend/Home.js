import React from 'react';

import './Home.css';

const Home = () => {
    return(<div className='Details' style={
        {backgroundImage: `url(${require(`./common/images/background.jpg`)})`}}>
            <h1>The Home Page</h1>
    </div>);
}

export default Home;