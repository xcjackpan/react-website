import React from 'react';
import NavigationContainer from './NavigationContainer'
import HomeComponent from '../components/HomeComponent'

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: null
		}
	}

	componentDidMount() {
		this.setState({ page: 'home' })
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
									 display={this.state.page =='about'?'flex': 
									 		  this.state.page =='projects'?'flex':
									 		  this.state.page =='blog'?'flex':
									 		  'none'}/>
				<HomeComponent page={this.state.page}
							   toAbout={this.toAbout}
							   display={this.state.page =='home'?'flex':'none'}/>
			</div>
		);
	}
}