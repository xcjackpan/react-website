import React from 'react';

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
						<div className="text">{this.props.description}<br />{/*<span style={{fontWeight: "bolder"}}>{this.props.bold}{this.props.bold?<br/>:null}</span>*/}
						<span className="tools">{this.props.tools}</span></div>
					</div>
				</div></a>
				<p className="project-description">{this.props.projectname}</p>
			</div>
		);
	}
}