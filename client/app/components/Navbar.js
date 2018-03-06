import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'caitlin & david\'s wedding',
            imageSrc: 'static/assets/images/hamburger.png',
            navStatus: 'closed'
        };

        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleNavClick() {
        if (this.state.navStatus === 'closed') {
            this.setState({
                imageSrc: 'static/assets/images/cancel.png',
                navStatus: 'open'
            });
        } else {
            this.setState({
                imageSrc: 'static/assets/images/hamburger.png',
                navStatus: 'closed'
            });
        }
        
    }

    handleLinkClick(e) {
        this.handleNavClick();

        if (e.currentTarget.innerHTML === 'home') {
            this.setState({ page: 'caitlin & david\'s wedding' });
        } else {
            this.setState({ page: e.currentTarget.innerHTML });
        }
    }

    render() {
        return (
            <nav>
                <h2 className="nav-header">{this.state.page}</h2>
                <img onClick={this.handleNavClick} className={`hamburger-${this.state.navStatus}`} src={this.state.imageSrc} alt="navigation" />
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