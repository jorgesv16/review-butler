import React, { Component } from "react";
import API from "../../utils/API";
import SidebarReact from "../../components/Sidebar2";
import ReviewDetail from "../../components/ReviewDetail";
import ReviewList from "../../components/ReviewList";
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';

import "./Inbox.css";

const mql = window.matchMedia(`(min-width: 950px)`);

//sidebar styles
const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
  spanBlue: {
  	color:"#304cb2",
  }
};

class Inbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			selectedReviewID: null,
			//sidebar state
 	 mql: mql,
      docked: false,
      open: false,
    };
    this.loadReviews();
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

	loadReviews() {
		API.getReviews()
			.then(res =>
				this.setState({
					reviews: res.data,
					selectedReviewID: res.data[0]._id //set the initial review to the first review ID
				})
			)
			.catch(err => console.log(err));
	}

	openReview(id) {
		//set the review to read in database
		const currentDate = Date.now();
		API.updateReview(id, { review_read: currentDate }).catch(err =>
			console.log(err)
		);

		const reviews = this.state.reviews;
		const index = reviews.findIndex(x => x._id === id);
		reviews[index].review_read = currentDate;
		this.setState({
			selectedReviewID: id
		});
	}

	toggleResponded(id) {
		const reviews = this.state.reviews;
		const index = reviews.findIndex(x => x._id === id);

		//check if response_date exists, if so set to null
		if (reviews[index].response_date) {
			console.log("date exists");
			API.updateReview(id, { response_date: null }).catch(err =>
				console.log(err)
			);
			reviews[index].response_date = null;
		} else {
			//the review has no date so set it
			console.log("no date set");
			const currentDate = Date.now();
			API.updateReview(id, { response_date: currentDate }).catch(err =>
				console.log(err)
			);
			reviews[index].response_date = currentDate;
		}
		//update the state to refresh page
		this.setState({
			selectedReviewID: id,
			reviews: reviews
		});
	}

	render() {
	//sidebar
	    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Review</span><span style={styles.spanBlue}>Butler </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };
		//get the current review
		const currentReview = this.state.reviews.find(
			x => x._id === this.state.selectedReviewID
		);
		return (
			<div className='no-scroll'>
		<SidebarReact {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className="flex-wrapper">
		    	<div className="columns">
						<ReviewList
							reviews={this.state.reviews}
							onReviewSelected={id => {
								this.openReview(id);
							}}
							selectedReviewID={this.state.selectedReviewID}
						/>
						<ReviewDetail
							review={currentReview}
							onRespondedClicked={id => {
								this.toggleResponded(id);
							}}
						/>
					</div>	
			</div>
        </MaterialTitlePanel>
      </SidebarReact>
      </div>
			
		);
	}
}

export default Inbox;

//selectedReview => this.setState({selectedReview: null})
