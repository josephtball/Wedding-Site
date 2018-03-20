import React from 'react';
import { Link } from 'react-router-dom';

const EventList = props => {
    return (
        <div className="event-details">
            <section className="event-details-header">
                <Link to="/schedule">
                    <img src="../static/assets/images/event-cancel.png" alt="return to event list" />
                </Link>
                <div>
                    <h2>Event Name</h2>
                    <h4>8/14/2018 5:00PM</h4>
                </div>
            </section>
            <section className="event-details-content">
                <div className="event-details-split">
                    <img className="event-details-image" src="../static/assets/images/event.jpg" alt="event image" />
                    <div className="event-details-location">
                        <h4>Location Name</h4>
                        <button>View on Map</button>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tristique metus, at maximus nisl. Aliquam in neque rhoncus, suscipit sem eget, sodales neque. Suspendisse sit amet ipsum leo. Phasellus a nisl viverra, molestie neque et, aliquam mauris. Nullam vulputate augue a massa accumsan blandit.</p>
            </section>
        </div>
    )
}

export default EventList;