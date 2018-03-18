import React from "react";
import firebase from '../../../../src/firebase.js';
import {Link, Route} from 'react-router-dom';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      hashTagArray: [],
      expandedPostIds: [],
    }

    this.getPost = this.getPost.bind(this);
    this.clickExpandOrReduceContentButton = this.clickExpandOrReduceContentButton.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newItems = [];
      for (let item in items) {
        let stringLineBreakAdded = items[item].content;
        newItems.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
          content: stringLineBreakAdded,
          hashtags: items[item].hashtags,
          likes: items[item].likes,
          readingTime: items[item].readingTime,
        });
      }
      this.setState({items: newItems});
    });
  }

  clickLikeButton(itemId, likesCount) {
    var updates = {};
    updates[`/items/${itemId}/likes`] = likesCount + 1;
    return firebase.database().ref().update(updates);

    //here needs to add a function changing the "like" button to "liked section"
  }

  renderContent(content) {
    let contentArray = content.split("line-break");
    return contentArray.map((content, index) => {
      return <div key={`content-${index}`}>{content}<br/><br/></div>;
    });
  }

  parseHashTags(hashtags) {
    let hashTagArray = hashtags;
    return hashTagArray.map((hashtag, i) => {
      return (
        <span key={i} className="hashTag">{`${hashtag} `}</span>)
    })
  }

  clickExpandOrReduceContentButton(blogPostID) {
    let ids = this.state.expandedPostIds;
    ids.includes(blogPostID) ? ids.splice(ids.indexOf(blogPostID), 1) :
      ids.push(blogPostID);

    this.setState({expandedPostIds: ids});
    console.log(this.state)
  }

  getBlogSubinfo(item) {
    return <div className="blog-post-subinfo">
      {this.parseHashTags(item.hashtags)}
      <span className="blog-post-reading-time">{item.readingTime} min read</span>
    </div>
  }

  togglePostLength(item) {
    return <div className="post-expand-reduce-button"
                onClick={() => this.clickExpandOrReduceContentButton(item.id)}>
      {this.state.expandedPostIds.includes(item.id) ? "less" : "expand"}
    </div>
  }

  getAuthorAndLike(item) {
    return <div className="post-summary-stat">
      <span className="post-source">
        Source: {item.user}
      </span>
      <span className="post-likes">
        <span className="post-like-button" onClick={() => this.clickLikeButton(item.id, item.likes)}>
          <i className="fa fa-heart"></i>
        </span>
        <span className="post-number-of-likes">
          {item.likes} Likes
        </span>
      </span>
    </div>;
  }

  getPost(item) {
    let className = this.state.expandedPostIds.includes(item.id) ?
      "blogPostWrapper-long" : "blogPostWrapper-short";

    return (<div key={item.id} className="blogpost-wrapper">
      <div className={className} id={`wrapper-${item.id}`}>
        <div className="blog-post-title">{item.title}</div>
        {this.getBlogSubinfo(item)}
        {this.renderContent(item.content)}
      </div>
      {this.togglePostLength(item)}
      {this.getAuthorAndLike(item)}
    </div>)
  }

  getArticleList() {
    return this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <li>{item.title}</li>
        </div>);
    })
  }

  render() {
    return <div className="landingPageContainer">

      <div className="article-list">
        Article List
        {this.getArticleList()}
      </div>
      <div className='article-container'>
        <section className='display-item'>
          <div className="wrapper">
            {this.state.items.map(this.getPost)}
          </div>
        </section>
      </div>
    </div>
  }
}


