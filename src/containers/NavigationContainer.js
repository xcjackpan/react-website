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
 			 <ReactCSSTransitionGroup transitionName="nav-transition" 
 			 						  transitionAppear={true}
 			 						  transitionAppearTimeOut={700}
 									  transitionEnterTimeout={700} 
 									  transitionLeaveTimeout={700}>
	 			<div key={this.props.page} className="nav-bar" style={{display:this.props.display}}>
		 				<div className="name">
			 				<p>JACK PAN</p>
			 			</div>
			 			<div className="nav-items">
			 				<li onClick={this.props.toHome}>HOME</li>
							<li onClick={this.props.toAbout}>ABOUT</li>
				 			<li>PROJECTS</li>
				 			<li>BLOG</li>
			 			</div>
	 			</div>
 			</ReactCSSTransitionGroup>
 			</div>
 		);
 	}
 }