import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { STATUS_CODES } from 'http';

export default class HomeComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		//console.log(this.props.display)
		return(
			<div>
			 	<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
					<div className="titleContainer" key={this.props.page} style={{display:this.props.display}}>
						<div className="banner">
							<h1>JACK PAN</h1>
							{/*<h4 id="long-tag">Developer and dog enthusiast</h4>
							<h4 id="short-tag">Developer</h4>*/}
						</div>
						<ul className="home-nav">
			 				<li onClick={this.props.toAbout}>ABOUT</li>
			 				<li onClick={this.props.toProjects}>PROJECTS</li>
			 				<li id="home-resume" onClick={this.props.toResume}>RESUME</li>
						</ul>
						<img className="jelly" src="jelly.png"/>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}