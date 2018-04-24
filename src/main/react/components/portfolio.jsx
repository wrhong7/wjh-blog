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
          image: portfolioRef[item].projImage,
          internalHref: portfolioRef[item].href,
          desc: portfolioRef[item].desc,
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
        <div className='container'>
          {this.state.items.map((item) => {
            return (
              <div key={item.id} className={`project-${item.id} project-item project-item-container-mobile`}>
                <div className="project-float-alternating project-item-mobile"
                     id={`project-description-${item.id}`}>
                  <div className="move-to-project-button" href={`${item.internalHref}`}>{item.title}</div>
                  <div className="project-description-container">{item.desc}</div>
                  <a className="go-to-page-anchor-container" href={item.internalHref}>
                    <div className="go-to-page-wrapper">
                      <div className="go-to-page-anchor">
                        >
                      </div>
                    </div>
                    <div className="go-to-page-caption">
                      read more
                    </div>
                  </a>
                </div>
                <div className="project-float-left project-item-mobile"
                     id={`project-image-${item.id}`}>
                  <img className="cureconnect-demo-photo" id={`project-image-${item.id} project-image-mobile`}
                       src={`${item.image}`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  }
}
