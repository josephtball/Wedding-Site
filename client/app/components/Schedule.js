import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import EventList from './EventList';
import EventDetails from './EventDetails';

export default class Schedule extends Component {
    constructor(props) {
        super(props)
    }

    render() {
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