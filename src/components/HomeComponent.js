import React from 'react';

export default class HomeComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="titleContainer">
				<div className="banner">
					<h1>JACK PAN</h1>
				</div>
				<ul className="home-nav">
	 				<li><a href="#">HOME</a></li>
	 				<li><a href="#">ABOUT</a></li>
	 				<li><a href="#">PROJECTS</a></li>
	 				<li><a href="#">BLOG</a></li>
				</ul>
				<img className="jelly" src="jelly.png"/>
			</div>
		);
	}
}