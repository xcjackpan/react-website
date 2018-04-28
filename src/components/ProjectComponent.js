import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ProjectComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="project-square">
				<a href={this.props.link} target="_blank"><div className="project-hover">
					<img className="project-preview" src={this.props.image}/>
					<div className="overlay">
						<div className="text">{this.props.description}</div>
					</div>
				</div></a>
				<p className="project-description">{this.props.projectname}</p>
			</div>
		);
	}
}