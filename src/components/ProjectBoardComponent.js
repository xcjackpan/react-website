import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ProjectComponent from '../components/ProjectComponent'

export default class ProjectBoardComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<ReactCSSTransitionGroup transitionName="transition"
	 							 transitionAppear={true}
	 						  	 transitionAppearTimeOut={200}
							  	 transitionEnterTimeout={200}
							  	 transitionLeaveTimeout={200}>
			<div className="project-div" key={this.props.page} style={{ display:this.props.display }}>
 					<div className="projects">
 						<h2>Here's a look at what I've done!</h2>
	 					<div className="projects-row">
	 						<ProjectComponent className ="square"
	 										  projectname = "Chroma"
	 										  image = "chroma.png"
	 										  description = "Android Studio, Java, XML"
	 										  link = "https://github.com/xcjackpan/Chroma"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Puppr"
	 										  image = "puppr.png"
	 										  description = "React, Clarifai API, Javascript"
	 										  link = "https://github.com/xcjackpan/puppr"/>
	 						<ProjectComponent  className ="square"
	 										  projectname = "reSTARant"
	 										  image = "restarant.png"
	 										  description = "React Native, Google OCR API"
	 										  link = "https://github.com/xcjackpan/restARant"/>
	 					</div>
	 					<div className="projects-row">
	 						<ProjectComponent className ="square"
	 										  projectname = "Audio Visualiser"
	 										  image = "visualiser.png"
	 										  description = "Javascript"
	 										  link = "https://github.com/xcjackpan/AudioAnalyzer"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "When Kevin President"
	 										  image = "kevin.png"
	 										  description = "Javascript"
	 										  link = "https://github.com/xcjackpan/WhenKevinPresident"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Coming soon!"
	 										  image = "tbd.png"
	 										  description = "Who knows what the future holds?"/>
	 					</div>
					</div>
			</div>
		</ReactCSSTransitionGroup>
		);
	}
}