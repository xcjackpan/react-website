import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class PostPreviewComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="post-preview" style={{display: (this.props.link === '#')?'none':'block'}}>
				<h2 className="post-title">{this.props.title}</h2>
				<p className="date">{this.props.date}</p>
				<p className="preview">{this.props.previewtext}</p><p className="readmore"><a href={this.props.link} target="_blank">Read more</a></p>
			</div>
		);
	}

}