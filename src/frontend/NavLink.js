import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

const NavLink = ({route, iconName, linkName, clickHandler}) => {
    return (<Link className='NavLink' to={route} onClick={clickHandler}>
        <img className='icon' src={require(`./common/images/${iconName}.svg`)} alt={`${linkName} icon`} />
        <div className='linkName'>{linkName}</div>
    </Link>);
}

export default NavLink;