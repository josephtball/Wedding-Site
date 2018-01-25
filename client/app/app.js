import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';

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
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));