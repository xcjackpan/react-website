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
					<div key={this.props.page} style={{ display:this.props.display }}>
						<h1>PLACEHOLDER</h1>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}