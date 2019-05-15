import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AboutComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
	 		<ReactCSSTransitionGroup transitionName="transition"
		 							 transitionAppear={true}
		 						  	 transitionAppearTimeOut={200}
								  	 transitionEnterTimeout={200}
								  	 transitionLeaveTimeout={200}>
				<div className="about-div" key={this.props.page} style={{ display:this.props.display }}>
						<div className="about">
							<div className="bio">
								<h1>Hi there.</h1>
								<br/>
								<p>I'm a computer science student at the University of Waterloo. I love to code and I'm allergic to my own dog.<br/> <br/>Let's get in touch!</p>
								<br/>
								<p className="icons"><a href="https://github.com/xcjackpan" target="_blank"><i className="fab fa-github"></i></a>
												 <a href="https://www.linkedin.com/in/xcjackpan/" target="_blank"><i className="fab fa-linkedin"></i></a>
												 <a href="mailto:xj2pan@uwaterloo.ca" target="_top"><i className="fas fa-envelope"></i></a></p>
							</div>
							<img className="head" src="head.png"/>
						</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}