import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'caitlin & david\'s wedding',
            navStatus: '',
            navClass: 'home-'
        };

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleNavClick() {
        if (this.state.navStatus === '') {
            this.setState({
                navStatus: 'open'
            });
        } else {
            this.setState({
                navStatus: ''
            });
        }
        
    }

    handleLinkClick(e) {
        this.handleNavClick();

        if (e.currentTarget.innerHTML === 'home') {
            this.setState({
                page: 'caitlin & david\'s wedding',
                navClass: 'home-'
            });
        } else {
            this.setState({
                page: e.currentTarget.innerHTML,
                navClass: ''
            });
        }
    }

    render() {
        return (
            <nav>
                <h2 className={`${this.state.navClass}nav-header`}>{this.state.page}</h2>
                <div onClick={this.handleNavClick} className={`menu-toggle ${this.state.navStatus}`}>
                    <div className="hamburger-top"></div>
                    <div className="hamburger-middle"></div>
                    <div className="hamburger-bottom"></div>
                </div>
                <div className={`site-nav site-nav-${this.state.navStatus}`}>
                    <div className="links">
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/" exact>home</NavLink><span className="nav-line"></span>
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/schedule">schedule</NavLink><span className="nav-line"></span>
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/accommodations">accommodations</NavLink><span className="nav-line"></span>
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/the-couple">the couple</NavLink><span className="nav-line"></span>
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/wedding-party">wedding party</NavLink><span className="nav-line"></span>
                        <NavLink onClick={this.handleLinkClick} className="nav-link" to="/gallery">gallery</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}