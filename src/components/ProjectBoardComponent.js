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
	 										  projectname = "UWclasswatch"
	 										  image = "classwatch.png"
	 										  description = "Get emails when there's a spot open for enrolment in a UWaterloo class"
	 										  tools = "React, node.js, Javascript, Firebase"
	 										  link = "https://github.com/xcjackpan/ClassWatch"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Puppr"
	 										  image = "puppr.png"
	 										  description = "Image gallery that filters out non-dog photos"
	 										  tools = "React, Javascript"
	 										  link = "https://github.com/xcjackpan/puppr"/>
	 						<ProjectComponent  className ="square"
	 										  projectname = "reSTARant"
	 										  image = "restarant.png"
	 										  description = "Take a photo of a restaurant's sign to see its reviews"
	 										  tools = "React Native"
	 										  link = "https://github.com/xcjackpan/restARant"/>
	 					</div>
	 					<div className="projects-row">
	 						<ProjectComponent className ="square"
	 										  projectname = "Chroma"
	 										  image = "chroma.png"
	 										  description = "Colorful mobile game"
	 										  tools = "Android Studio, Java"
	 										  link = "https://github.com/xcjackpan/Chroma"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "Audio Visualiser"
	 										  image = "visualiser.png"
	 										  description = "Shows you how a song looks"
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/AudioAnalyzer"/>
	 						<ProjectComponent className ="square"
	 										  projectname = "When Kevin President"
	 										  image = "kevin.png"
	 										  description = "Why read lot word when few word do trick?"
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/WhenKevinPresident"/>
	 					</div>
					</div>
			</div>
		</ReactCSSTransitionGroup>
		);
	}
}