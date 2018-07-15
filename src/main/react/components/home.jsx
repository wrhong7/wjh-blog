import React from "react";
import {Link, Route} from 'react-router-dom';



export default class Home extends React.Component {
  render() {
    return (
      <div className="navbar-home-container">

        <div className="notification-pop-up">
          Oh yeah! Upgraded with the modern stack <span>(react.js + node.js + firebase)!</span>
        </div>

        <div className="home-intro-container-web">
          Hello, my name is Won&nbsp;Jun.<br/> I am a consultant / designer&nbsp;/&nbsp;developer.
        </div>

        <div className="home-background-container-web">
          <img className="home-image-web" id="landing-page-photo-size-for-mobile"
               src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/landpagePhotoHigerRes.jpg?alt=media&token=91348cd2-c278-4bd4-b801-a04f4fe1ed29"/>
        </div>

        <div className="home-intro-content">
          About:<br/>
          I currently work as a Tech Consultant at <a href="https://www.kpmg.com" target="_blank"><u>KPMG</u></a>,
          advising financial institutions with their technology architecture, design, and management strategy.
          See my previous work experience on <a href="https://www.linkedin.com/in/wjhong/" target="_blank"><u>LinkedIn</u></a> Outside of work,
          I have a <a href="https://www.linkedin.com/in/ece-ozalp/" target="_blank"><u>lovely partner</u></a> of life, who is an excellent software engineer.
          Over last number of years, I worked on various <a href="/portfolio" target="_blank"><u>side projects</u></a>.
          I am care about making healthcare and finance industries more accessible. Don’t hesitate to get in touch.
          I would love to have coffee with you.
        </div>
        <div className="home-intro-content home-intro-contact-box">
          Have an idea?<br/> Let's get coffee. Please message me.
          <div className="contact-buttons">
            <a href="mailto:won.hong@stern.nyu.edu" className="contact-button-container">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/won.jun.hong/"
               target="_blank" className="contact-button-container">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/atlanta714"
               target="_blank" className="contact-button-container">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/towonhong"
               target="_blank" className="contact-button-container">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
