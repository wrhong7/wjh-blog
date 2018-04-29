import React from "react";
import {Link, Route} from 'react-router-dom';
import firebase from "../../../firebase.js";

//here we should export images

export default class Library extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      currentItem: '',
      items: [],
      libRef: [],
      expandedLeafletIds: [],
      expandedReviewIds: [],
      expandSectionMoreOrLess: [],
    }
    // this.handleChange = this.handleChange.bind(this);
    this.showBookReview = this.showBookReview.bind(this);
  }

  renderContent(content) {
    let contentArray = content.split("line-break");
    return contentArray.map((content, index) => {
      return <div key={`content-${index}`}>{content}<br/><br/></div>;
    });
  }

  componentDidMount() {
    const libRef = firebase.database().ref('library');
    libRef.on('value', (snapshot) => {
      let libRef = snapshot.val();
      let newState = [];
      for (let item in libRef) {
        newState.push({
          id: item,
          bookAuthor: libRef[item].author,
          bookReview: libRef[item].bookReview,
          bookImage: libRef[item].bookImageImport,
          bookTitle: libRef[item].bookTitle,
          bookScore: libRef[item].score
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  showBookInfo(id) {
      let ids = this.state.expandedLeafletIds;

      if (ids.indexOf(id) !== -1) {
        ids.splice(ids.indexOf(id), 1);
      } else {
        ids.push(id);
      }

      // ids.includes(id) ?
      //   ids.splice(ids.indexOf(id), 1) : ids.push(id);

      this.setState({expandedLeafletIds: ids});
  }

  showBookReview(id) {
    let bookReviewIds = this.state.expandedReviewIds;

    if (bookReviewIds.indexOf(id) !== -1) {
      bookReviewIds.splice(bookReviewIds.indexOf(id), 1);
    } else {
      bookReviewIds.push(id);
    }

    // bookReviewIds.includes(id) ?
    //   bookReviewIds.splice(bookReviewIds.indexOf(id),1) : bookReviewIds.push(id);

    this.setState({bookReviewIds: bookReviewIds});
  }

  render() {
    return <div className="library-Container">
      <div className='app'>
        <header>
          <div className="wrapper">
          </div>
        </header>
        <div className='container'>
            <div className="wrapper">
                {this.state.items.map((item) => {

                  let className;

                  if (this.state.expandedReviewIds.indexOf(item.id) !== -1) {
                    className = "hideLeaflet";
                  } else {
                    if (this.state.expandedLeafletIds.indexOf(item.id) !== -1) {
                      className = "expandLeaflet";
                    } else {
                      className = "hideLeaflet";
                    }
                  }

                  // if (this.state.expandedReviewIds.includes(item.id)) {
                  //   className = "hideLeaflet";
                  // } else {
                  //   className = this.state.expandedLeafletIds.includes(item.id) ?
                  //     "expandLeaflet" : "hideLeaflet";
                  // }

                  let bookReviewClassName;

                  if (this.state.expandedReviewIds.indexOf(item.id) !== -1) {
                    bookReviewClassName = "expandBookReview";
                  } else {
                    bookReviewClassName = "hideBookReview";
                  }

                  // let bookReviewClassName = this.state.expandedReviewIds.includes(item.id) ?
                  //   "expandBookReview" : "hideBookReview";

                  let largeContainer;

                  if (this.state.expandedReviewIds.indexOf(item.id) !== -1) {
                    largeContainer = "book-container-large";
                  } else {
                    largeContainer = "book-container-small";
                  }

                  // let largeContainer = this.state.expandedReviewIds.includes(item.id) ?
                  //   "book-container-large" : "book-container-small";

                  let largeContainerPhotoWidth;

                  if (this.state.expandedReviewIds.indexOf(item.id) !== -1) {
                    largeContainerPhotoWidth = "book-image-large-container";
                  } else {
                    largeContainerPhotoWidth = "book-image-small-container";
                  }

                  //
                  // let largeContainerPhotoWidth = this.state.expandedReviewIds.includes(item.id) ?
                  //   "book-image-large-container" : "book-image-small-container";

                  return (
                    <div className={largeContainer} key={item.id}
                         onMouseEnter={() => this.showBookInfo(item.id)}
                         onMouseLeave={() => this.showBookInfo(item.id)}
                         onClick={()=> this.showBookReview(item.id)}
                         >
                      <img className={largeContainerPhotoWidth}
                        src={item.bookImage}
                      />
                      <div className={className}>
                        <span className="svg-star">
                          <i className="fa fa-star"></i>
                        </span> {item.bookScore} review <i className={`fa fa-chevron-right`}></i>
                      </div>
                      <div className={bookReviewClassName}>
                        <div className="book-title">
                          <span className="book-review-score-section">
                              <i className="fa fa-star"></i> {item.bookScore}
                          </span>
                          <span className="book-review-title-section">
                            {item.bookTitle}
                          </span>
                          <span className="book-review-author-section">
                            <span className="book-review-by"> by</span> {item.bookAuthor}
                          </span>
                        </div>
                        <div className="book-review">
                          {this.renderContent(item.bookReview)}
                        </div>
                        <div className="close-review-section">
                          Close Review
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
        </div>
      </div>
    </div>
  }
}
