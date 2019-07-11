import React from 'react';

import './SocialLink.css';

const SocialLink = ({to, iconName, linkName}) => {
    return (<a className='SocialLink' href={to}>
        <img className='icon' src={require(`./common/images/${iconName}.svg`)} alt={`${linkName} icon`} />
    </a>);
}

export default SocialLink;