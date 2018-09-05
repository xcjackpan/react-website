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
		}
	}


	nextPage = (e) => {
		if (this.state.currentpage != this.maxPage) {
			let pagenum = this.state.currentpage;
			this.setState({ currentpage: pagenum + 3 });
		}
	}

	render() {
		const titleArray = ["Reflections on ClassWatch", "Debate and Public Speaking", "Reflections on My Personal Site", "Reflections on Chroma", "A Blog's Purpose", "FILLER6"];
		const dateArray = ["08/01/2018", "01/24/2018", "01/10/2018", "12/26/2017", "12/03/2017", "00/00/00"];
		const previewArray = ["This summer, a fellow Waterloo student and I launched ClassWatch, a web application made specifically for UW students to help with course...",
							  "I debated competitively through all four years of high school. By competitive, I mean practices and coaches and tournaments. I was in...",
							  "I'm writing this after having re-designed my site twice, with a third time in the works. That should give you a pretty good idea of how much...",
							  "When I decided I wanted to make a mobile game, all the programming knowledge I had came from a month of self-taught Java fundamentals and two...",
							  "Welcome all to the first post of my blog. I'm writing this as a short introduction for (hopefully) many other posts to come. As of now, the plan is...",
							  "Lorem ipsum dolor sit amet, sea idque virtute cu. Delectus facilisi facilisis per ei, duo ea suas tempor inermis. Eos omnis instructior id. Nec..."];
		const linkArray = ["dist/posts/classwatch.html", "dist/posts/speaking.html", "dist/posts/website.html", "dist/posts/chroma.html", "dist/posts/intro.html", "#"];
		// make sure you have the same amount of charactrs

		return (
			<ReactCSSTransitionGroup transitionName="transition"
			 							 transitionAppear={true}
			 						  	 transitionAppearTimeOut={200}
									  	 transitionEnterTimeout={200}
									  	 transitionLeaveTimeout={200}>
				<div className="blog-div" key={this.props.page} style={{ display:this.props.display }}>
	 					<div className="blog">
	 						<div className="button"><i style={{ color:this.state.currentpage == 0?'#FFFFFF':null, visibility: (this.state.currentpage == 0)?'hidden':'visible' }} 
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
							<div className="button"><i style={{ color:this.state.currentpage == this.maxPage?'#FFFFFF':null, visibility:this.state.currentpage == this.maxPage?'hidden':'visible' }} 
								 					   className="fas fa-caret-right" onClick={this.nextPage}></i></div>
						</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}

}