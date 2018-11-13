import React from "react";
import firebase from '../../../../src/firebase.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      hashTagArray: [],
      expandedPostIds: [],
      fetchedItems: [],
      isPageBottomReached: false,
    };

    this.getPost = this.getPost.bind(this);
    this.clickExpandOrReduceContentButton = this.clickExpandOrReduceContentButton.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
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
          index: items[item].index,
        });
        //indexing based on the newest post.
        newItems.sort(function(a, b){
          return b.index-a.index
        })
      }

      this.setState({items: newItems});
      this.setState({fetchedItems: newItems.slice(0,5)});
    });

    window.addEventListener("scroll", this.handleScroll);
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
      if (!this.state.isPageBottomReached && this.getDocHeight() < this.getScrollXY()[1] + window.innerHeight + 660) {
        this.setState({isPageBottomReached: true});
        this.loadMorePosts();
      }

      setTimeout(() => {
        this.setState({isPageBottomReached: false});
      }, 500)
  }

  loadMorePosts() {
    let loadedPostArrayLength = this.state.fetchedItems.length;
    let newPostArraayLength = loadedPostArrayLength + 5;
    this.setState({fetchedItems: this.state.items.slice(0, newPostArraayLength)});
  }

  loadAllPosts() {
    let itemsLength = this.state.items.length;
    this.setState({fetchedItems: this.state.items.slice(0, itemsLength)});
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
      return <div key={`content-${index}`}>{content}<br/></div>;
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

    if (ids.indexOf(blogPostID) !== -1) {
      ids.splice(ids.indexOf(blogPostID), 1);
    } else {
      ids.push(blogPostID);
    }

    // ids.includes(blogPostID) ? ids.splice(ids.indexOf(blogPostID), 1) :
    //   ids.push(blogPostID);
    this.setState({expandedPostIds: ids});
    // console.log(this.state);
  }

  getBlogSubinfo(item) {
    return <div className="blog-post-subinfo reduced-font-weight">
      {this.parseHashTags(item.hashtags)}
      <span className="blog-post-reading-time">{item.readingTime} min read</span>
    </div>
  }

  togglePostLength(item) {
    return (
      <div className="post-expand-reduce-button reduced-font-weight"
           onClick={() => this.clickExpandOrReduceContentButton(item.id)}>
        {(this.state.expandedPostIds.indexOf(item.id) !== -1) ? "less" : "expand"}
      </div>
      )
  }

  getAuthorAndLike(item) {
    return <div className="post-summary-stat reduced-font-weight">
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
    let className;

    if (this.state.expandedPostIds.indexOf(item.id) !== -1) {
      className = "blogPostWrapper-long" ;
    } else {
      className = "blogPostWrapper-short";
    }

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

  scrollToBlogPost(id) {
    //Loads all blog posts when clicked (because the blog post loads all articles, but infinite scrolling might have not
    //fully loaded all the posts on the blog. Therefore, we need to load all posts to use this features.
    this.loadAllPosts();
    var element = document.getElementById(`wrapper-${id}`);
    element.scrollIntoView();
  }

  getArticleList() {
    return this.state.items.map((item) => {
      return (
        <div key={item.id} onClick={() => this.scrollToBlogPost(item.id)}>
          <li>{item.title}</li>
        </div>);
    })
  }

  expandBlogPrincipleSection() {
    $(".blogging-principles-section").css("height", "auto")
  }

  blogPrincipleSection() {
    return(<div className="blogging-principles-section">
      <div className="blog-principle-header"
           onClick={() => this.expandBlogPrincipleSection()}>
        Click here for blogging principles
      </div>
      1. Never write a single sentence to show off.<br/>
      2. Never post online unless 3 days have passed since writing.<br/>
      3. Never offend anyone. Start from a consensus. <br/>
      4. Purpose of writing is to crystalize my thoughts."
    </div>)
  }

  render() {
    return <div className="landingPageContainer">
      <div className="article-list reduced-font-weight">
        List
        {this.getArticleList()}
      </div>
      <div className='article-container'>
        <section className='display-item'>
          <div className="wrapper">
            {this.blogPrincipleSection()}
          </div>
          <div className="wrapper">
            {this.state.fetchedItems.map(this.getPost)}
          </div>
        </section>
      </div>
    </div>
  }
}


