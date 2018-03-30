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
							<p>I'm currently a first-year student at the University of Waterloo studying computer science. Here 
							you'll find my professional resume, my portfolio, and a personal blog.<br/> <br/>Feel free to take a look around!</p>
						</div>
						<img className="head" src="head.png"/>	
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}