import React from 'react';
import './Header.scss';

//this is how we import logo
import logo from '../../assets/Logo/Logo-brainflix.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg'

const Header = () => {
    return (
        <header className="header">         
            <img class="header__logo" src={logo} alt="Brainflix-Logo"/>
            <input type="text" className="header__search" placeholder="Search" />
            <div className="header__div">
                <button className="header__uploadBtn"> UPLOAD </button>
                <img className= "header__profileImg"src={profileImage} alt="mohan-murugue-profile"/>
            </div>
        </header>
    );
}

export default Header;