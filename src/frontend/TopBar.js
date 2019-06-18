import React from 'react';

const TopBar = ({backgroundName, pageTitle}) => {
    return (<div className='TopBar' style={
        {backgroundImage: `url(${require(`./common/images/${backgroundName}.jpg`)})`}
    }>
        <div className='TopBarOverlay'>
            <h1 className='PageTitle'>{pageTitle}</h1>
        </div>
    </div>);
}

export default TopBar;