import React from 'react';
import { Link } from 'react-router-dom';

const EventList = props => {
    return (
        <ul className="event-list">
            {
                props.events.map((event, index) => {
                    return (
                        <li key={index} className="event-list-event">
                            <Link to={`/schedule/${index}`}>
                                <div className="event-list-heading">
                                    <h3 className="event-list-title">{event.title}</h3>
                                    <h4 className="event-list-date">{event.date} {event.time}</h4>
                                </div>
                                <img className="event-list-arrow" src="static/assets/images/arrow.png" alt="arrow" />
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default EventList;