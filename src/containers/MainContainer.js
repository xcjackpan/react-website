import React from 'react';
import NavigationContainer from './NavigationContainer'
import HomeComponent from '../components/HomeComponent'
import AboutComponent from '../components/AboutComponent'

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: null,
		}
	}

	componentDidMount() {
		this.setState({ page: 'home' })
	}

	toHome = (e) => {
		this.setState({ page: null });
		setTimeout(function() { this.setState({ page: 'home' }); }.bind(this), 220);
		console.log("HOME");
	}

	toAbout = (e) => {
		this.setState({ page: 'change' });		
		console.log("ABOUT");	
		setTimeout(function() { this.setState({ page: 'about' }); }.bind(this), 220);		
	}

	toProjects = (e) => {
		this.setState({ page: 'change' });		
		console.log("PROJECTS");
		setTimeout(function() { this.setState({ page: 'projects' }); }.bind(this), 220);	
	}

	toBlog = (e) => {
		this.setState({ page: 'change' });		
		console.log("BLOG");
		setTimeout(function() { this.setState({ page: 'blog' }); }.bind(this), 220);
	}

	render() {
		return(
			<div className="container">
				<NavigationContainer page={this.state.page}
									 toHome={this.toHome}	
									 toAbout={this.toAbout}
									 toProjects={this.toProjects}
									 toBlog={this.toBlog}
									 show={(this.state.page =='about' || this.state.page =='projects' || this.state.page =='blog' || this.state.page == 'change' )?true:false}
									 display={(this.state.page =='about' || this.state.page =='projects' || this.state.page =='blog' || this.state.page == 'change' )?'flex':'none'}/>
				<HomeComponent page={this.state.page}
							   toAbout={this.toAbout}
							   toProjects={this.toProjects}
							   toBlog={this.toBlog}   
							   display={this.state.page =='home'?'flex':'none'}/>
				<AboutComponent page={this.state.page} 
								display={this.state.page =='about'?'flex':'none'}/>
			</div>
		);
	}
}