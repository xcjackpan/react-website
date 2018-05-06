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
		const titleArray = ["Developing a Mobile Game", "Building a Website — Part 1", "Debate and Public Speaking", "FILLER4", "FILLER5", "FILLER6"];
		const dateArray = ["12/26/2017", "01/10/2018", "01/24/2018", "69/69/69", "69/69/69", "69/69/69"];
		const previewArray = ["I began working on Chroma about a week after I picked up Android Studio. As it turns out, you can only follow along with Youtube tutorials for so long...",
							  "This is going to be sort of meta – since I’m writing about my website on my website – but bear with me. I started thinking about how I wanted my...",
							  "I gave my first speech in a stuffy classroom in front of a few upper-year debaters acting as judges. Even now, I vividly remember being terrified...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb...",
							  "Somebody once told me the world was gonna roll me. I ain't the sharpest tool in the shed. She was looking kinda dumb with her finger and her thumb..."];
		const linkArray = ["posts/chroma.html", "#", "#", "#", "#", "#"];

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
							<ReactCSSTransitionGroup transitionName="transition"
			 			 							 transitionAppear={true}
			 			 						  	 transitionAppearTimeOut={200}
			 									  	 transitionEnterTimeout={200}
			 									  	 transitionLeaveTimeout={200}>
								<PostPreviewComponent title={titleArray[this.maxPage - this.state.currentpage + 2]}
													  date={dateArray[this.maxPage - this.state.currentpage + 2]}
													  previewtext={previewArray[this.maxPage - this.state.currentpage + 2]}
													  link={linkArray[this.maxPage - this.state.currentpage + 2]}/>
								<PostPreviewComponent title={titleArray[this.maxPage - this.state.currentpage + 1]}
													  date={dateArray[this.maxPage - this.state.currentpage + 1]}
													  previewtext={previewArray[this.maxPage - this.state.currentpage + 1]}
													  link={linkArray[this.maxPage - this.state.currentpage + 1]}/>
								<PostPreviewComponent title={titleArray[this.maxPage - this.state.currentpage]}
													  date={dateArray[this.maxPage - this.state.currentpage]}
													  previewtext={previewArray[this.maxPage - this.state.currentpage]}
													  link={linkArray[this.maxPage - this.state.currentpage]}/>
							</ReactCSSTransitionGroup>
						</div>
						<div className="button"><i style={{ color:that.state.currentpage == this.maxPage?'#FFFFFF':null, visibility:that.state.currentpage == this.maxPage?'hidden':'visible' }} 
							 					   className="fas fa-caret-right" onClick={this.nextPage}></i></div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}