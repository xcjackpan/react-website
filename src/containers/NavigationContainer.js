import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 export default class NavigationContainer extends React.Component {

 	constructor(props) {
 		super(props);
 		this.state = {
 			page: this.props.page
 		}
 	}

 	render() {
 		return(
 			<div style={{width: '100%'}}>
	 			 <ReactCSSTransitionGroup transitionName="transition"
	 			 						  transitionAppear={true}
	 			 						  transitionAppearTimeOut={200}
	 									  transitionEnterTimeout={200}
	 									  transitionLeaveTimeout={200}>
		 			<div key="nav-bar" className="nav-bar" style={{display:this.props.display}}>
			 			<div className="name">
				 			<p>JACK PAN</p>
				 		</div>
				 		<div className="nav-items">
				 			<li onClick={this.props.toHome}>HOME</li>
							<li onClick={this.props.toAbout}>ABOUT</li>
					 		<li onClick={this.props.toProjects}>PROJECTS</li>
					 		<li onClick={this.props.toBlog}>BLOG</li>
				 		</div>
		 			</div>
	 			</ReactCSSTransitionGroup>
 			</div>
 		);
 	}
 }