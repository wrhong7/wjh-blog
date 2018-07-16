import React from "react";
import firebase from '../../../../src/firebase.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: '',
      url: '',
      likes: '',
      items: [],
      source: '',
      desc: '',
      loadedItems: [],
    }

    this.getPost = this.getPost.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('comedy');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items);
      let newItems = [];
      for (let item in items) {
        let stringLineBreakAdded = items[item].content;
        newItems.push({
          id: item,
          dataType: items[item].dataType,
          url: items[item].url,
          likes: items[item].likes,
          source: items[item].source,
          desc: items[item].desc,
          isPageBottomReached: false,
        });
        newItems = newItems.reverse();
      }
      this.setState({items: newItems});
      this.setState({loadedItems: newItems.slice(0,2)});

      window.addEventListener("scroll", this.handleScroll);
    });
  }

  loadMorePosts() {
    let fetchItemLength = this.state.loadedItems.length;
    console.log(fetchItemLength);
    console.log(this.state.items);
    this.setState({loadedItems: this.state.items.slice(0,fetchItemLength + 2)});
  }

  getScrollXY() {
    var scrOfX = 0, scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
      //Netscape compliant
      scrOfY = window.pageYOffset;
      scrOfX = window.pageXOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
      //DOM compliant
      scrOfY = document.body.scrollTop;
      scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
      //IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop;
      scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
  }

//taken from http://james.padolsey.com/javascript/get-document-height-cross-browser/
  getDocHeight() {
    var D = document;
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );
  }

  handleScroll(event) {

    if (!this.state.isPageBottomReached && this.getDocHeight() < this.getScrollXY()[1] + window.innerHeight + 654) {
      console.log("should be triggered only onece");
      console.log(this.getDocHeight(),this.getScrollXY()[1], window.innerHeight);
      this.setState({isPageBottomReached: true});
      this.loadMorePosts();
    }

    setTimeout(() => {
      this.setState({isPageBottomReached: false});
    }, 1000)
  }

  clickLikeButton(itemId, likesCount) {
    var updates = {};
    updates[`/comedy/${itemId}/likes`] = likesCount + 1;
    return firebase.database().ref().update(updates);
    //here needs to add a function changing the "like" button to "liked section"
  }

  getAuthorAndLike(item) {
    return <div className="post-summary-stat reduced-font-weight comedy-like-post">
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

  getGif(item){
    return <div key={item.id} className="comedy-post-item-wrapper">
      <div id={`wrapper-${item.id}`}>
        <div className="comedy-post-desc">{item.desc}</div>
        <div className="video-container">
          <iframe
            src={item.url}
            width="853" height="480"
            className="comedy-post-video"
            frameBorder='0' scrolling='no'
            allowFullScreen>
          </iframe>
        </div>
      </div>
      {this.getAuthorAndLike(item)}
    </div>
  }

  getImg(item) {
    return <div key={item.id} className="comedy-post-item-wrapper">
      <div id={`wrapper-${item.id}`}>
        <div className="comedy-post-desc">{item.desc}</div>
        <div className="image-container">
          <img className="image-size-container" src={item.url} />
        </div>
      </div>
      {this.getAuthorAndLike(item)}
    </div>
  }

  getPost(item) {
    switch(item.dataType) {
      case "gif":
        return this.getGif(item);

      case "img":
        return this.getImg(item);
    }
  }

  render() {
    return (
      <div className="landingPageContainer">
        <div className="comedy-philosophy">
          What's the point of Internet if there is no entertainment?
        </div>
        <div className='video-page-container'>
          {this.state.loadedItems.map(this.getPost)}
        </div>
      </div>
    )
  }

}
