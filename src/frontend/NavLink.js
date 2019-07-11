import React from 'react';

import './NavLink.css';

const NavLink = ({to, iconName, linkName}) => {
    return (<a className='NavLink' href={`#${to}`}>
        <img className='icon' src={require(`./common/images/${iconName}.svg`)} alt={`${linkName} icon`} />
        <div className='linkName'>{linkName}</div>
    </a>);
}

export default NavLink;