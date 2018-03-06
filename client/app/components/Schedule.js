import React, { Component } from 'react';

export default class Schedule extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="schedule">
            <section className="content schedule-content">
                <ul className="event-list">
                    <li className="event">
                        <div className="event-details">
                            <h3 className="event-title">Event Name</h3>
                            <h4 className="event-date">8/14/2018 5:00PM</h4>
                        </div>
                        <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                    </li>
                    <li className="event">
                        <div className="event-details">
                            <h3 className="event-title">Event Name</h3>
                            <h4 className="event-date">8/14/2018 5:00PM</h4>
                        </div>
                        <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                    </li>
                    <li className="event">
                        <div className="event-details">
                            <h3 className="event-title">Event Name</h3>
                            <h4 className="event-date">8/14/2018 5:00PM</h4>
                        </div>
                        <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                    </li>
                    <li className="event">
                        <div className="event-details">
                            <h3 className="event-title">Event Name</h3>
                            <h4 className="event-date">8/14/2018 5:00PM</h4>
                        </div>
                        <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                    </li>
                    <li className="event">
                        <div className="event-details">
                            <h3 className="event-title">Event Name</h3>
                            <h4 className="event-date">8/14/2018 5:00PM</h4>
                        </div>
                        <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                    </li>
                </ul>
            </section>
        </main>
        )
    }
}