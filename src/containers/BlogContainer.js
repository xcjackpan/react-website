import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PostPreviewComponent from '../components/PostPreviewComponent'

export default class BlogContainer extends React.Component {

	constructor(props) {
		super(props);
		this.maxPage = 3;
		this.state = {
			currentpage: 0,
		}
	}

	prevPage = (e) => {
		if (this.state.currentpage != 0) {
			let pagenum = this.state.currentpage;
			this.setState({ currentpage: pagenum - 3 });
			console.log(this.state.currentpage);
		}
	}


	nextPage = (e) => {
		if (this.state.currentpage != this.maxPage) {
			let pagenum = this.state.currentpage;
			this.setState({ currentpage: pagenum + 3 });
			console.log(this.state.currentpage);
		}
	}

	render() {
		let that = this;
		const titleArray = ["FILLER1", "FILLER2", "FILLER3", "FILLER4", "FILLER5", "FILLER6"];
		const dateArray = ["69/69/69", "69/69/69", "69/69/69", "69/69/69", "69/69/69", "69/69/69"];
		const previewArray = ["Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb..."];
		const linkArray = ["#", "#", "#", "#", "#", "#"];

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
 					<div className="blog" key={this.props.page} style={{ display:this.props.display }}>
 						<div className="button"><i style={{ color:that.state.currentpage == 0?'#FFFFFF':null, visibility:that.state.currentpage == 0?'hidden':'visible' }} 
 												   className="fas fa-caret-left" onClick={this.prevPage}></i></div>
 						<div className="previews">
							<PostPreviewComponent title={titleArray[this.state.currentpage]}
												  date={dateArray[this.state.currentpage]}
												  previewtext={previewArray[this.state.currentpage]}
												  link={linkArray[this.state.currentpage]}/>
							<PostPreviewComponent title={titleArray[this.state.currentpage + 1]}
												  date={dateArray[this.state.currentpage + 1]}
												  previewtext={previewArray[this.state.currentpage + 1]}
												  link={linkArray[this.state.currentpage + 1]}/>
							<PostPreviewComponent title={titleArray[this.state.currentpage + 2]}
												  date={dateArray[this.state.currentpage + 2]}
												  previewtext={previewArray[this.state.currentpage + 2]}
												  link={linkArray[this.state.currentpage + 2]}/>
						</div>
						<div className="button"><i style={{ color:that.state.currentpage == this.maxPage?'#FFFFFF':null, visibility:that.state.currentpage == this.maxPage?'hidden':'visible' }} 
							 					   className="fas fa-caret-right" onClick={this.nextPage}></i></div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}