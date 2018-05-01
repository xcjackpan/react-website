import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class PostPreviewComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="post-preview">
				<h2 className="post-title">[POST TITLE]</h2>
				<p className="date">[DATE]</p>
				<br/>
				<p className="preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lacus ac sapien feugiat mattis. Donec suscipit volutpat libero sit amet luctus. Praesent non turpis iaculis, feugiat metus id, pellentesque purus. Donec sed lacus eget mauris sodales ornare sit amet eget mauris. In hac habitasse platea dictumst.</p>
			</div>
		);
	}

}