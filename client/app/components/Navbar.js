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
            this.setState({ navStatus: 'open' });
        } else {
            this.setState({ navStatus: 'closed' });
        }
        
    }

    render() {
        return (
            <nav>
                <h2 className="nav-header">{this.state.page}</h2>
                <img onClick={this.handleNavClick} className={`hamburger ${this.state.navStatus}`} src={this.state.imageSrc} alt="navigation" />
            </nav>
        );
    }
}