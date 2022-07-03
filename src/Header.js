import React from 'react';
import './Header.css';
import {Input} from '@material-ui/core';
import {VscThreeBars} from 'react-icons/vsc';
import {BiSearchAlt2} from 'react-icons/bi';

const Header= () => {
    return (
        <div className="header mx-auto">
        <div className="header-content mx-auto">
        <div className="header-left">
        <i><VscThreeBars/></i>
        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""/>
        <span>TV</span>
        <span>Movies</span>
        <span>Sports</span>
        <span>News</span>
        <span>Disney+</span>
        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-kids.svg" alt="" className="kids"/>
        </div>
        <div className="header-right">
        <Input placeholder="Search" className="search"/>
        <i><BiSearchAlt2/></i>
        <button>SUBSCRIBE</button>
        <span>Login</span>
        </div>
        </div>
        </div>
    );
};

export default Header;