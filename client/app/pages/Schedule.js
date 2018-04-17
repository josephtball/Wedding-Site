import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import helpers from '../utils/helpers';
import EventList from '../components/EventList';
import EventDetails from '../components/EventDetails';

export default class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }

        helpers.getEvents().then((data) => {
            this.setState({ events: data });
        });
    }

    render() {
        return (
            <main className="schedule">
            <section className="content schedule-content">
                <Switch>
                    <Route path={`/schedule`} exact render={props => (<EventList events={this.state.events} />)} />
                    <Route path={`/schedule/:eventId`} render={({ match }) => (<EventDetails event={this.state.events[match.params.eventId]} />)} />
                </Switch>
            </section>
        </main>
        )
    }
}