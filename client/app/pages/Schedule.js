import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import helpers from '../utils/helpers';
import EventList from '../components/EventList';
import EventDetails from '../components/EventDetails';

export default class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventList: []
        }

        helpers.getEvents().then((response) => {
            this.setState({ eventList: response.data });
        });
    }

    render() {
        console.log(this.state);
        return (
            <main className="schedule">
            <section className="content schedule-content">
                <Switch>
                    <Route path={`/schedule`} exact component={EventList} />
                    <Route path={`/schedule/:eventId`} component={EventDetails} />
                </Switch>
            </section>
        </main>
        )
    }
}