import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails = ({ event }) => {
    return (
        <div className="event-details">
            <section className="event-details-header">
                <Link to="/schedule">
                    <img src="../static/assets/images/event-cancel.png" alt="return to event list" />
                </Link>
                <div>
                    <h2>{event.title}</h2>
                    <h4>{event.date} {event.time}</h4>
                </div>
            </section>
            <section className="event-details-content">
                <div className="event-details-split">
                    <img className="event-details-image" src={event.imgPath} alt="event image" />
                    <div className="event-details-location">
                        <h4>{event.location.title}</h4>
                        <a href={event.mapLink} target="_blank"><button>View on Map</button></a>
                    </div>
                </div>
                <p>{event.description}</p>
            </section>
        </div>
    )
}

export default EventDetails;