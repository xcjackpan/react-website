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
								<p>I'm a first-year student at the University of Waterloo studying computer science. Here 
								you'll find my professional resume, my portfolio, and a personal blog.<br/> <br/>Feel free to take a look around!</p>
								<br/>
								<div className="resume-button">
									<a href="resume.pdf" target="_blank">
										<p>RESUME</p>
									</a>
								</div>
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