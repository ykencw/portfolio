import React from 'react';

import './NavLink.css';

const NavLink = ({route, iconName, linkName, clickHandler}) => {
    return (<a className='NavLink' href={route} onClick={clickHandler}>
        <img className='icon' src={require(`./common/images/${iconName}.svg`)} alt={`${linkName} icon`} />
        <div className='linkName'>{linkName}</div>
    </a>);
}

export default NavLink;