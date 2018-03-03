import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Caitlin & David\'s Wedding',
            imageSrc: 'static/assets/images/hamburger.png',
            navStatus: 'closed'
        };

        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick() {
        console.log('hamburger clicked');
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

    render() {
        return (
            <nav>
                <h2 className="nav-header">{this.state.page}</h2>
                <img onClick={this.handleNavClick} className={`hamburger-${this.state.navStatus}`} src={this.state.imageSrc} alt="navigation" />
                <div className={`site-nav site-nav-${this.state.navStatus}`}>
                    <ul>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/" exact>home</NavLink></li>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/schedule">schedule</NavLink></li>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/accommodations">accommodations</NavLink></li>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/the-couple">the couple</NavLink></li>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/wedding-party">wedding party</NavLink></li>
                        <li><NavLink onClick={this.handleNavClick} className="nav-link" to="/gallery">gallery</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}