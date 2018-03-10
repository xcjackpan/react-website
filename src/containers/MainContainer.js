import React from 'react';
import NavigationContainer from './NavigationContainer'

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 'home'
		}
	}

	componentDidMount() {
		console.log("main mounted");
	}

	render() {
		return(
			<NavigationContainer/>
		);
	}
}