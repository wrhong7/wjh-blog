import React from "react";
import {Link, Route} from 'react-router-dom';
import firebase from "../../../firebase";

//here we should export images

export default class Library extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      libRef: [],
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const libRef = firebase.database().ref('library');
    libRef.on('value', (snapshot) => {
      let libRef = snapshot.val();
      let newState = [];
      for (let item in libRef) {
        newState.push({
          id: item,
          title: libRef[item].author,
          user: libRef[item].bookTitle,
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return <div className="landingPageContainer">
      Hello Library

      <div className='app'>
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className='container'>
          <section className='display-item'>
            <div className="wrapper">
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <p>{item.content}</p>
                      <p>{item.hashtags}</p>
                      <p>
                        brought by: {item.user}
                        {item.likes} Likes
                        {/*<button onClick={() => this.removeItem(item.id)}>Remove Item</button>*/}
                        <button onClick={() => this.clickLikeButton(item.id, item.likes)}>Like</button>
                      </p>
                    </div>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  }
}
