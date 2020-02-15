import React from 'react';
import './Header.scss';

//this is how we import logo
import logo from '../../assets/Logo/Logo-brainflix.svg'

const Header = () => {
    //continue with Header stuff //
    return (
        <header className="header">
            <img src={logo} alt="Brainflix-Logo"/>
        </header>
    );
}

export default Header;