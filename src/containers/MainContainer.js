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

	toHome = (e) => {
		console.log("HOME");
		this.setState({ page: 'home' });
	}

	toAbout = (e) => {
		console.log("ABOUT");	
		this.setState({ page: 'about' });
	}

	render() {
		return(
			<div className="container">
				<NavigationContainer page={this.state.page}
									 toHome={this.toHome}	
									 toAbout={this.toAbout}
									 display={this.state.page !='home'?'flex':'none'}/>
				{this.state.page == 'home' && <HomeComponent
												toAbout={this.toAbout}/>}
			</div>
		);
	}
}