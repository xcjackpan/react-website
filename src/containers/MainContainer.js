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

	toProjects = (e) => {
		console.log("PROJECTS");
		this.setState({ page: 'projects' });
	}

	toBlog = (e) => {
		console.log("BLOG");
		this.setState({ page: 'blog' });
	}

	render() {
		return(
			<div className="container">
				<NavigationContainer toHome={this.toHome}	
									 toAbout={this.toAbout}
									 toProjects={this.toProjects}
									 toBlog={this.toBlog}
									 display={(this.state.page =='about' || this.state.page =='projects' || this.state.page =='blog')?'flex':'none'}/>
				<HomeComponent page={this.state.page}
							   toAbout={this.toAbout}
							   toProjects={this.toProjects}
							   toBlog={this.toBlog}   
							   display={this.state.page =='home'?'flex':'none'}/>
			</div>
		);
	}
}