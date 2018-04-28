import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ProjectComponent from '../components/ProjectComponent'

export default class ProjectBoardComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
 					<div className="projects" key={this.props.page} style={{ display:this.props.display }}>
 						<h2>Here's a look at what I've done!</h2>
	 					<div className="projects-row">
	 						<ProjectComponent projectname = "Chroma"
	 										  image = "chroma.png"
	 										  description = "Android Studio, Java, XML"
	 										  link = "https://github.com/xcjackpan/Chroma"/>
	 						<ProjectComponent projectname = "Puppr"
	 										  image = "puppr.png"
	 										  description = "React, Clarifai API, Javascript"
	 										  link = "https://github.com/xcjackpan/puppr"/>
	 						<ProjectComponent projectname = "reSTARant"
	 										  image = "restarant.png"
	 										  description = "React Native, Google OCR API"
	 										  link = "https://github.com/xcjackpan/restARant"/>
	 					</div>
	 					<div className="projects-row">
	 						<ProjectComponent projectname = "Audio Visualiser"
	 										  image = "visualiser.png"
	 										  description = "Javascript"
	 										  link = "https://github.com/xcjackpan/AudioAnalyzer"/>
	 						<ProjectComponent projectname = "When Kevin President"
	 										  image = "kevin.png"
	 										  description = "Javascript"
	 										  link = "https://github.com/xcjackpan/WhenKevinPresident"/>
	 						<ProjectComponent projectname = "  "
	 										  image = "visualiser.png"/>
	 					</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}