import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PostPreviewComponent from '../components/PostPreviewComponent'

export default class BlogContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
 					<div className="blog" key={this.props.page} style={{ display:this.props.display }}>
 						<div className="button"><i class="fas fa-caret-left"></i></div>
 						<div className="previews">
							<PostPreviewComponent/>
							<PostPreviewComponent/>
						</div>
						<div className="button"><i class="fas fa-caret-right"></i></div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}