import React from "react";
import {Link, Route} from 'react-router-dom';
import webImage from "../../resources/home-web-image2.jpg"

export default class Home extends React.Component {
  render() {
    return (
       <div className="navbar-home-container">
        <div className="home-intro-container-web">
          Hello, my name is Won Jun.<br/> I am a consultant / designer / developer.
        </div>
         <div className="home-background-container-web">
          <img className="home-image-web" src={webImage}/>
         </div>
      </div>
    )
  }
}
