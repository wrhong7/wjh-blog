import React from "react";
import firebase from '../../../../src/firebase.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      likes: '',
      items: [],
      source: '',
    }

    this.getPost = this.getPost.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('comedy');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newItems = [];
      newItems = newItems.reverse();
      for (let item in items) {
        let stringLineBreakAdded = items[item].content;
        newItems.push({
          id: item,
          title: items[item].title,
          url: items[item].url,
          likes: items[item].likes,
          source: items[item].source,
        });
        newItems = newItems.reverse();
      }
      this.setState({items: newItems});
    });
  }

  clickLikeButton(itemId, likesCount) {
    var updates = {};
    updates[`/comedy/${itemId}/likes`] = likesCount + 1;
    return firebase.database().ref().update(updates);

    //here needs to add a function changing the "like" button to "liked section"
  }

  getAuthorAndLike(item) {
    return <div className="post-summary-stat reduced-font-weight">
      <span className="comedy-post-likes">
        <span className="comedy-post-like-button" onClick={() => this.clickLikeButton(item.id, item.likes)}>
          <i className="fa fa-heart"></i>
        </span>
        <span className="comedy-post-number-of-likes">
          {item.likes} Likes
        </span>
      </span>
    </div>;
  }

  getPost(item) {
    return (
      <div key={item.id} className="comedy-post-item-wrapper">
        <div id={`wrapper-${item.id}`}>
          <div className="comedy-post-title">{item.title}</div>
          <div className="comedy-post">{item.url}</div>
          <div className="comedy-post-source">{item.source}</div>
        </div>
        {this.getAuthorAndLike(item)}
      </div>
    )
  }

  render() {
    return (
      <div className="landingPageContainer">
        <div className="comedy-philosophy">
          What's the point of internet if there is no entertainment?
        </div>
        <div className='article-container'>
          {this.state.items.map(this.getPost)}
        </div>
      </div>
    )
  }

}


