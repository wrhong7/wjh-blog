import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import firebase from "../../../firebase";

//here we should export images

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      portfolioRef: [],
    }
  }

  componentDidMount() {
    const portfolioRef = firebase.database().ref('portfolio');
    portfolioRef.on('value', (snapshot) => {
      let portfolioRef = snapshot.val();
      let newState = [];
      for (let item in portfolioRef) {
        newState.push({
          id: item,
          title: portfolioRef[item].projTitle,
          link: portfolioRef[item].projLink,
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return <div className="landingPageContainer">
      <div className='app'>
        <header>
          <div className="wrapper">
            <h1>Portfolio Listing</h1>
          </div>
        </header>
        <div className='container'>
          <section className='display-item'>
            <div className="wrapper">
              <a className="navbar-home-button" href="/portfolio/cureconnect">CureConnect</a>
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <p>{item.link}</p>
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
