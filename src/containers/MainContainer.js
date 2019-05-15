import React from 'react';
import NavigationContainer from './NavigationContainer'
import HomeComponent from '../components/HomeComponent'
import AboutComponent from '../components/AboutComponent'
import ProjectBoardComponent from '../components/ProjectBoardComponent'

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

	toHome = () => {
		this.setState({ page: null });
		setTimeout(function() { this.setState({ page: 'home' }); }.bind(this), 220);
	}

	toAbout = () => {
		if (this.state.page != 'about') {
			this.setState({ page: 'change' });
			setTimeout(function() { this.setState({ page: 'about' }); }.bind(this), 220);
		}
	}

	toProjects = () => {
		if (this.state.page != 'projects') {
			this.setState({ page: 'change' });		
			setTimeout(function() { this.setState({ page: 'projects' }); }.bind(this), 220);
		}
	}

	toResume = (e) => {
		console.log("ahhh");
		window.open('resume.pdf', '_blank', 'fullscreen=yes');
	}

	render() {
		return(
			<div className="container">
				<NavigationContainer page={this.state.page}
									 toHome={this.toHome}	
									 toAbout={this.toAbout}
									 toProjects={this.toProjects}
									 toResume={this.toResume}
									 show={(this.state.page =='about' || this.state.page =='projects' || this.state.page == 'change' )?true:false}
									 display={(this.state.page =='about' || this.state.page =='projects' || this.state.page == 'change' )?'flex':'none'}/>
				<HomeComponent page={this.state.page}
							   toAbout={this.toAbout}
								 toProjects={this.toProjects}
								 toResume={this.toResume}
							   display={this.state.page =='home'?'flex':'none'}/>
				<AboutComponent page={this.state.page} 
								display={this.state.page =='about'?'flex':'none'}/>
				<ProjectBoardComponent page={this.state.page}
									   display={this.state.page =='projects'?'flex':'none'}/>
			</div>
		);
	}
}