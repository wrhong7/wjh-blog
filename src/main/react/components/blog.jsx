import React from "react";
import firebase from '../../../../src/firebase.js';
import {Link, Route} from 'react-router-dom';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      hashTagArray: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        let stringLineBreakAdded = items[item].content;
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
          content: stringLineBreakAdded,
          hashtags: items[item].hashtags,
          likes: items[item].likes
        });
      }
      this.setState({
        items: newState
      });
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

  // hashTagListCompiling(hashTag) {
  //   let hashTagArray = this.state.hashTagArray;
  //   !hashTagArray.includes(hashTag) && hashtagArray.push(hashTag);
  //   this.setState({hashTagArray});
  // }
  render() {
    return <div className="landingPageContainer">
      Hello Blog
      <div className='app'>
        <header>
          <div className="wrapper">
            <h1>Blog</h1>
          </div>
          <div className="article-list">
            {this.state.items.map((item) => {
              return (
                <div key={item.id}>
                  <li>{item.title}</li>
                </div>);
            })}
          </div>
        </header>
        <div className='container'>
          <section className='display-item'>
            <div className="wrapper">
                {this.state.items.map((item) => {
                  return (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      {this.renderContent(item.content)}
                      <p>{item.hashtags}</p>
                      <p>
                        brought by: {item.user}
                        {item.likes} Likes
                        <button onClick={() => this.clickLikeButton(item.id, item.likes)}>Like</button>
                      </p>
                    </div>);
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  }
}


