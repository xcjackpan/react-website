import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 export default class NavigationContainer extends React.Component {

 	constructor(props) {
 		super(props);
 	}

 	render() {
 		return(
 			<div style={{width: '100%'}}>
	 			 <ReactCSSTransitionGroup transitionName="nav-transition"
	 			 						  transitionAppear={true}
	 			 						  transitionAppearTimeOut={350}
	 									  transitionEnterTimeout={350}
	 									  transitionLeaveTimeout={350}>
		 			<div key={this.props.show} className="nav-bar" style={{display:this.props.display}}>
			 			<div className="name">
				 			<p>JACK PAN</p>
				 		</div>
				 		<div className="nav-items">
				 			<li onClick={this.props.toHome}>HOME</li>
							<li onClick={this.props.toAbout}>ABOUT</li>
					 		<li onClick={this.props.toProjects}>PROJECTS</li>
					 		<li id="nav-resume" onClick={this.props.toResume}>RESUME</li>
				 		</div>
		 			</div>
	 			</ReactCSSTransitionGroup>
 			</div>
 		);
 	}
 }