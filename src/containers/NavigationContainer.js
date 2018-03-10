import React from 'react';

 export default class NavigationContainer extends React.Component {

 	constructor(props) {
 		super(props);
 		this.state = {
 			page: 'home'
 		}
 	}

 	render() {
 		return(
 			<div className="nav-bar">
	 			<ul>
	 				<li>JACK PAN</li>
	 				<li>HOME</li>
	 				<li>ABOUT</li>
	 				<li>PROJECTS</li>
	 				<li>BLOG</li>
	 			</ul>
 			</div>
 		)
 	}
 }