import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AboutComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
			 	<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
					<div className="about" key={this.props.page} style={{ display:this.props.display }}>
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
						</div>
						<img className="head" src="head.png"/>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}