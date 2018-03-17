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
	 				<li onClick={this.props.toAbout}>ABOUT</li>
	 				<li>PROJECTS</li>
	 				<li>BLOG</li>
				</ul>
				<img className="jelly" src="jelly.png"/>
			</div>
		);
	}
}