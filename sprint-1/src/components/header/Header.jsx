import React from 'react';
import './Styles.scss';

//this is how we import logo
import logo from '../../assets/Logo/Logo-brainflix.svg'

const Header = () => {

    return (
        <header className="header">
            <img src={logo} alt="Brainflix-Logo"/>
        </header>
    );
}

export default Header;