import React from 'react';
import NavigationContainer from './NavigationContainer'
import HomeComponent from '../components/HomeComponent'

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
			<div className="container">
				{this.state.page != 'home' && <NavigationContainer/>}
				{this.state.page == 'home' && <HomeComponent/>}
			</div>
		);
	}
}