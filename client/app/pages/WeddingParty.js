import React, { Component } from 'react';


export default class WeddingParty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bmaidsSelect: 'selected',
            gmenSelect: '',
            bmaidsHide: '',
            gmenHide: 'hide'
        };

        this.showBridesmaids = this.showBridesmaids.bind(this);
        this.showGroomsmen = this.showGroomsmen.bind(this);
    }

    showBridesmaids() {
        if (this.state.bmaidsSelect !== 'selected')  {
            this.setState({
                bmaidsSelect: 'selected',
                gmenSelect: '',
                bmaidsHide: '',
                gmenHide: 'hide'
            });
        }
    }

    showGroomsmen() {
        if (this.state.gmenSelect !== 'selected')  {
            this.setState({
                bmaidsSelect: '',
                gmenSelect: 'selected',
                bmaidsHide: 'hide',
                gmenHide: ''
            });
        }
    }

    render() {
        return (
            <main>
                <section className="content weddingParty-content">
                    <h2><span onClick={this.showBridesmaids} className={this.state.bmaidsSelect}>Bridesmaids</span> / <span onClick={this.showGroomsmen} className={this.state.gmenSelect}>Groomsmen</span></h2>
    
                    <div className={`photo-cards ${this.state.bmaidsHide}`}>
                        <div className="card bridemaid-1">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                                <h5>Maid of Honor</h5>
                            </div>
                        </div>
                        <div className="card bridemaid-2">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card bridemaid-3">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card bridemaid-4">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card bridemaid-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card bridemaid-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                    </div>
    
                    <div className={`photo-cards ${this.state.gmenHide}`}>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                                <h5>Best Man</h5>
                            </div>
                        </div>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                        <div className="card groomsman-default">
                            <div className="label">
                                <h3 className="first-name">FirstName</h3>
                                <h3 className="last-name">LastName</h3>
                            </div>
                        </div>
                    </div>
    
                </section>
            </main>
        )
    }
}