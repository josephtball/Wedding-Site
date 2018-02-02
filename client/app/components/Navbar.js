import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Caitlin & David\'s Wedding'
        };
    }

    render() {
        return (
            <nav>
                <h2 className="nav-header">{this.state.page}</h2>
                <img className="hamburger" src="static/assets/images/hamburger.png" alt="navigation" />
            </nav>
        );
    }
}