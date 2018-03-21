import React from "react";
import {Link, Route} from 'react-router-dom';
import firebase from "../../../firebase";
import blackswan from "../../resources/blackswan.png"

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
      ids.includes(id) ? ids.splice(ids.indexOf(id), 1) :
        ids.push(id);
      this.setState({expandedLeafletIds: ids});
  }

  showBookReview(id) {
    console.log(id);
    let bookReviewIds = this.state.expandedReviewIds;
    bookReviewIds.includes(id) ? bookReviewIds.splice(bookReviewIds.indexOf(id),1) :
      bookReviewIds.push(id);
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

                  if (this.state.expandedReviewIds.includes(item.id)) {
                    className = "hideLeaflet";
                  } else {
                    className = this.state.expandedLeafletIds.includes(item.id) ?
                      "expandLeaflet" : "hideLeaflet";
                  }

                  let bookReviewClassName = this.state.expandedReviewIds.includes(item.id) ?
                    "expandBookReview" : "hideBookReview";
                  let largeContainer = this.state.expandedReviewIds.includes(item.id) ?
                    "book-container-large" : "book-container-small";
                  let largeContainerPhotoWidth = this.state.expandedReviewIds.includes(item.id) ?
                    "book-image-large-container" : "book-image-small-container";

                  return (
                    <div className={largeContainer} key={item.id}
                         onMouseEnter={() => this.showBookInfo(item.id)}
                         onMouseLeave={() => this.showBookInfo(item.id)}>
                      <img className={largeContainerPhotoWidth}
                        src={item.bookImage}
                      />
                      <div className={className} onClick={()=> this.showBookReview(item.id)}>
                        <i className="fa fa-star"></i> {item.bookScore} review <i className={`fa fa-chevron-right`}></i>
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
                             by {item.bookAuthor}
                          </span>
                        </div>
                        <div className="book-review">
                          {item.bookReview}
                        </div>
                        <div className="close-review-section"
                          onClick={() => {this.showBookReview(item.id)}}>
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
