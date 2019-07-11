import React from 'react';

import './NavLink.css';

const NavLink = ({to, iconName, linkName, clickHandler}) => {
    return (<a className='NavLink' href={`#${to}`} onClick={clickHandler}>
        <img className='icon' src={require(`./common/images/${iconName}.svg`)} alt={`${linkName} icon`} />
        <div className='linkName'>{linkName}</div>
    </a>);
}

export default NavLink;