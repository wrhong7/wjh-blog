import React from "react";
import firebase from '../../../../src/firebase.js';
import {Link, Route} from 'react-router-dom';

//here we should export images

export default class Blog extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    })
  }

  clickLikeButton(itemId, likesCount) {
    var updates = {};
    updates[`/items/${itemId}/likes`] = likesCount + 1;
    return firebase.database().ref().update(updates);

    //here needs to add a function changing the "like" button to "liked section"
  }

  renderContent(content) {
    let contentArray = content.split("line-break");

    return contentArray.map(content => {
      return <div>{content}<br/></div>;
    });
  }

  render() {
    return <div className="landingPageContainer">
      Hello Blog

      <div className='app'>
        <header>
          <div className="wrapper">
            <h1>Blog Item</h1>
          </div>
        </header>
        <div className='container'>

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

        </div>
      </div>
    </div>
  }
}


