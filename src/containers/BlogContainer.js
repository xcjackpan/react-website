import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PostPreviewComponent from '../components/PostPreviewComponent'

export default class BlogContainer extends React.Component {

	constructor(props) {
		super(props);
		this.maxPage = 0;
		this.state = {
			currentpage: 0,
		}
	}

	prevPage = (e) => {
		if (this.state.currentpage != 0) {
			let pagenum = this.state.currentpage;
			this.setState({ currentpage: pagenum - 3 });
		}
	}


	nextPage = (e) => {
		if (this.state.currentpage != this.maxPage) {
			let pagenum = this.state.currentpage;
			this.setState({ currentpage: pagenum + 3 });
		}
	}

	render() {
		const titleArray = ["Developing a Mobile Game", "Building a Website - Part 1", "Debate and Public Speaking", "FILLER4", "FILLER5", "FILLER6"];
		const dateArray = ["12/26/2017", "01/10/2018", "01/24/2018", "00/00/00", "00/00/00", "00/00/00"];
		const previewArray = ["I began working on Chroma about a week after I picked up Android Studio. As it turns out, you can only follow along with Youtube tutorials for...",
							  "This is going to be sort of meta - some thoughts about my website being posted on my website -  but bear with me. I started thinking about...",
							  "I gave my first speech in a stuffy classroom in front of a few upper-year debaters acting as judges. Even now, I vividly remember being...",
							  "Lorem ipsum dolor sit amet, sea idque virtute cu. Delectus facilisi facilisis per ei, duo ea suas tempor inermis. Eos omnis instructior id. Nec...",
							  "Lorem ipsum dolor sit amet, sea idque virtute cu. Delectus facilisi facilisis per ei, duo ea suas tempor inermis. Eos omnis instructior id. Nec...",
							  "Lorem ipsum dolor sit amet, sea idque virtute cu. Delectus facilisi facilisis per ei, duo ea suas tempor inermis. Eos omnis instructior id. Nec..."];
		const linkArray = ["dist/posts/chroma.html", "dist/posts/website.html", "dist/posts/speaking.html", "#", "#", "#"];
		// make sure you have the same amount of charactrs

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="transition"
 			 							 transitionAppear={true}
 			 						  	 transitionAppearTimeOut={200}
 									  	 transitionEnterTimeout={200}
 									  	 transitionLeaveTimeout={200}>
 					<div className="blog" key={this.props.page} style={{ display:this.props.display }}>
 						<div className="button"><i style={{ color:this.state.currentpage == 0?'#FFFFFF':null, visibility: (this.state.currentpage == 0)?'hidden':'visible' }} 
 												   className="fas fa-caret-left" onClick={this.prevPage}></i></div>
 						<div className="previews">
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
						</div>
						<div className="button"><i style={{ color:this.state.currentpage == this.maxPage?'#FFFFFF':null, visibility:this.state.currentpage == this.maxPage?'hidden':'visible' }} 
							 					   className="fas fa-caret-right" onClick={this.nextPage}></i></div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}