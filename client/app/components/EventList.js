import React from 'react';
import { Link } from 'react-router-dom';

const EventList = props => {
    return (
        <ul className="event-list">
            <li className="event">
                <Link to="/schedule/1">
                    <div className="event-details">
                        <h3 className="event-title">Event Name</h3>
                        <h4 className="event-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event">
                <Link to="/schedule/2">
                    <div className="event-details">
                        <h3 className="event-title">Event Name</h3>
                        <h4 className="event-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event">
                <Link to="/schedule/3">
                    <div className="event-details">
                        <h3 className="event-title">Event Name</h3>
                        <h4 className="event-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event">
                <Link to="/schedule/4">
                    <div className="event-details">
                        <h3 className="event-title">Event Name</h3>
                        <h4 className="event-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
            <li className="event">
                <Link to="/schedule/5">
                    <div className="event-details">
                        <h3 className="event-title">Event Name</h3>
                        <h4 className="event-date">8/14/2018 5:00PM</h4>
                    </div>
                    <img className="event-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                </Link>
            </li>
        </ul>
    )
}

export default EventList;