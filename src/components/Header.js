import React from 'react'
import "./Header.css";
import punklogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png"
import themeSwitchIcon from "../assets/header/theme-switch.png"
const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punklogo} className='punklogo' alt=''/>
            </div>
        <div className='searchBar'>
            <div className='searchicon'>
                <img  src={searchIcon}/>
            </div>
            <input className='searchInput' placeholder='Collection,item or user...'/>
        </div>
        <div className='headerItems'>
            <p> Drops</p>
            <p> Marketplace</p>
            <p> Create</p>
        </div>
        <div className='headerActions'>
            <div className='themeSwitch'>
                <img src={themeSwitchIcon}/>
            </div>
            <div className='loginButton'>Get In</div>

        </div>
        </div>
    )
}

export default Header;
