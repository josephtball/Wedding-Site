import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<Navbar />
				<Main />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));