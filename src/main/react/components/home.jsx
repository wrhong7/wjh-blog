import React from "react";
import {Link, Route} from 'react-router-dom';
import webImage from "../../resources/home-web-image2.jpg"

export default class Home extends React.Component {
  render() {
    return (
      <div className="navbar-home-container">

        <div className="notification-pop-up">
          Oh yeah! Upgraded with the modern stack (react.js + node.js + firebase)!
        </div>

        <div className="home-intro-container-web">
          Hello, my name is Won Jun.<br/> I am a consultant / designer / developer.
        </div>

        <div className="home-background-container-web">
          <img className="home-image-web" id="landing-page-photo-size-for-mobile" src={webImage}/>
        </div>

      </div>
    )
  }
}
