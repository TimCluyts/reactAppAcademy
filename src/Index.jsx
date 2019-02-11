import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>Good bye cruel world!</h1>;
	}
}

module.exports = {
	render(targetContainer) {
		ReactDOM.render(<HelloWorld />, targetContainer);
	}
};
