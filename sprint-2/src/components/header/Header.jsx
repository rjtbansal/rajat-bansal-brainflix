import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

//this is how we import logo
import logo from '../../assets/Logo/Logo-brainflix.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg'

const Header = () => {
    return (
        <header className="header">  
        {/* Link styling messed up in mobile mode */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img className="header__logo" src={logo} alt="Brainflix-Logo"/>
            </Link>
            <input type="text" className="header__search" placeholder="Search" />
            <div className="header__div">

            <Link to="/upload">
                <button className="header__uploadBtn"> UPLOAD </button> 
            </Link>
        
            <img className= "header__profileImg"src={profileImage} alt="mohan-murugue-profile"/>
            </div>
        </header>
    );
}

export default Header;