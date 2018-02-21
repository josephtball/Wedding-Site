import React, { Component } from 'react';

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
                        <li><a className="nav-link" href="#home">home</a></li>
                        <li><a className="nav-link" href="#schedule">schedule</a></li>
                        <li><a className="nav-link" href="#accommodations">accommodations</a></li>
                        <li><a className="nav-link" href="#the-couple">the couple</a></li>
                        <li><a className="nav-link" href="#wedding-party">wedding party</a></li>
                        <li><a className="nav-link" href="#gallery">gallery</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}