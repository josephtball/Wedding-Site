import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            <div className="menu-toggle">
                <div className="hamburger-top"></div>
                <div className="hamburger-middle"></div>
                <div className="hamburger-bottom"></div>
            </div>
            <div className="site-nav">
                <ul>
                    <li><a className="nav-link scroll" href="#home">home</a></li>
                    <li><a className="nav-link scroll" href="#couple">the couple</a></li>
                    <li><a className="nav-link scroll" href="#wedding-party">wedding party</a></li>
                    <li><a className="nav-link scroll" href="#schedule">schedule</a></li>
                    <li><a className="nav-link scroll" href="#gallery">gallery</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;