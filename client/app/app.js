import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Accommodations from './pages/Accommodations';
import TheCouple from './pages/TheCouple';
import WeddingParty from './pages/WeddingParty';
import Gallery from './pages/Gallery';

const App = props => {
	return (
		<BrowserRouter>
			<div id="all-content">
				<Navbar />
				<div id="main-content">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/schedule" component={Schedule} />
						<Route path="/accommodations" component={Accommodations} />
						<Route path="/the-couple" component={TheCouple} />
						<Route path="/wedding-party" component={WeddingParty} />
						<Route path="/gallery" component={Gallery} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));