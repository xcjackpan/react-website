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
	 					<div className="projects-row">
	 						<ProjectComponent className = "square"
	 										  projectname = "UWclasswatch"
	 										  image = "classwatch.png"
	 										  description = "Notifications for course enrolment. 1.5k+ users."
	 										  tools = "React, Node, Typescript, MongoDB"
	 										  link = "https://github.com/xcjackpan/classwatch-v2"/>
							<ProjectComponent  className = "square"
													projectname = "AR World"
													image = "arworld.png"
													description = "See real-world images as videos. Best AR/VR Hack at PennApps XX."
													tools = "Kotlin, Sceneform, React, Node"
													link = "https://github.com/xcjackpan/ar-world"/>
							<ProjectComponent className = "square"
													projectname = "JAKE"
													image = "jake.png"
													description = "Modified NLP keyword extraction."
													tools = "C++"
													link = "https://github.com/xcjackpan/jake"/>
	 					</div>
						<div className="projects-row">
							<ProjectComponent className = "square"
													projectname = "CharityChain"
													image = "charitychain.png"
													description = "Using blockchain to keep donors informed and charities honest."
													tools = "Solidity, React, Firebase"
													link = "https://github.com/xcjackpan/Charity-Chain"/>
							<ProjectComponent className = "square"
													projectname = "Claire"
													image = "claire.png"
													description = "Chatbot for senior citizens. Finalist at Hack the 6ix 2018."
													tools = "React, Node, Javascript, Firebase"
													link = "https://github.com/xcjackpan/hackthe6ix"/>
							<ProjectComponent className = "square"
													projectname = "Always Sunny Soundboard"
													image = "alwayssunny.png"
													description = "Simple soundboard. 6.0k+ Play Store installs, 4.1 stars."
													tools = "React Native"
													link = "https://github.com/xcjackpan/always-sunny-soundboard"/>
						</div>
	 					<div className="projects-row">
						 <ProjectComponent className = "square"
	 										  projectname = "Dunderbot"
	 										  image = "dunderbot.png"
	 										  description = "Using Markov chains to generate scenes from The Office."
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/dunderbot"/>
						 <ProjectComponent  className = "square"
	 										  projectname = "reSTARant"
	 										  image = "restarant.png"
	 										  description = "Take a photo of a restaurant's sign to see its reviews."
	 										  tools = "React Native"
	 										  link = "https://github.com/xcjackpan/restARant"/>
						 <ProjectComponent className = "square"
	 										  projectname = "Puppr"
	 										  image = "puppr.png"
	 										  description = "Image gallery that filters out non-dog photos."
	 										  tools = "React, Javascript"
	 										  link = "https://github.com/xcjackpan/puppr"/>
	 					</div>
	 					<div className="projects-row" style={{ paddingBottom: 50 }}>
	 						<ProjectComponent className = "square"
	 										  projectname = "Audio Visualiser"
	 										  image = "visualiser.png"
	 										  description = "Shows you how a song looks."
	 										  tools = "Javascript"
	 										  link = "https://github.com/xcjackpan/AudioAnalyzer"/>
	 						<ProjectComponent className = "square"
	 										  projectname = "Chroma"
	 										  image = "chroma.png"
	 										  description = "Colorful mobile game."
	 										  tools = "Android Studio, Java"
	 										  link = "https://github.com/xcjackpan/Chroma"/>
							<ProjectComponent className = "square"
													projectname = ""
													image = "tbd.png"
													description = "I gotta start working on stuff in multiples of three."
													tools = ""
													link = "https://github.com/xcjackpan"/>
	 					</div>
					</div>
			</div>
		</ReactCSSTransitionGroup>
		);
	}
}