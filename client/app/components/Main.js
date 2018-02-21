import React, { Component } from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <section className="hero">
                    <div className="hero-title">
                        <h1>Caitlin & David</h1>
                        <h3>8/17/18</h3>
                    </div>
                </section>
                <section className="content">
                    <h2>Welcom to Our Wedding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tristique metus, at maximus nisl. Aliquam in neque rhoncus, suscipit sem eget, sodales neque. Suspendisse sit amet ipsum leo. Phasellus a nisl viverra, molestie neque et, aliquam mauris. Nullam vulputate augue a massa accumsan blandit.</p>
                    <button className="rsvp" disabled>RSVP</button>
                </section>
            </main>
        )
    }
}