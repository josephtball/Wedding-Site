import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = { openCloseMenu: false };

        this.toggleClass = this.toggleClass.bind(this);
    }

    render() {
        return (
            <nav>
                <div className="hamburger-container">
                    <input type="checkbox" id="toggle" />
                    <label for="toggle" className="toggle-animation">
                        <div className="hamburger-top"></div>
                        <div className="hamburger-middle"></div>
                        <div className="hamburger-bottom"></div>
                    </label>
                </div>
                {/* <div onClick={this.toggleClass} className={`menu-toggle${this.state.openCloseMenu ? ' open': ''}`}>
                    <div className="hamburger-top"></div>
                    <div className="hamburger-middle"></div>
                    <div className="hamburger-bottom"></div>
                </div> */}
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

    toggleClass() {
        let currentState = this.state.openCloseMenu;
        this.setState({ openCloseMenu: !currentState });
    }
}