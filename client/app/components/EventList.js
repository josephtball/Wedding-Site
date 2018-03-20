import React from 'react';
import { Link } from 'react-router-dom';

const EventList = props => {
    return (
        <ul className="event-list">
            <li className="event-list-event">
                <Link to="/schedule/1">
                    <div className="event-list-heading">
                        <h3 className="event-list-title">Event Name</h3>
                        <h4 className="event-list-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event-list-event">
                <Link to="/schedule/1">
                    <div className="event-list-heading">
                        <h3 className="event-list-title">Event Name</h3>
                        <h4 className="event-list-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event-list-event">
                <Link to="/schedule/1">
                    <div className="event-list-heading">
                        <h3 className="event-list-title">Event Name</h3>
                        <h4 className="event-list-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event-list-event">
                <Link to="/schedule/1">
                    <div className="event-list-heading">
                        <h3 className="event-list-title">Event Name</h3>
                        <h4 className="event-list-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event-list-event">
                <Link to="/schedule/1">
                    <div className="event-list-heading">
                        <h3 className="event-list-title">Event Name</h3>
                        <h4 className="event-list-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
        </ul>
    )
}

export default EventList;