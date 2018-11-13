import React from "react";
import {Link, Route} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="navbar-home-container">

        <div className="notification-pop-up">
          Oh yeah! Won Jun just moved from New York -> Vancouver!
        </div>

        <div className="home-intro-container-web">
          Hello, my name is Won&nbsp;Jun.<br/> I am a consultant / designer&nbsp;/&nbsp;developer.
        </div>

        <div className="home-background-container-web">
          <img className="home-image-web" id="landing-page-photo-size-for-mobile"
               src="https://firebasestorage.googleapis.com/v0/b/won-jun-hong-website.appspot.com/o/won-jun-hong-vancouver-technology-software-developer-product-manager-entrepreneur.webp?alt=media&token=aaec5c34-95b1-4ee2-90e0-abb83ee22a2b"/>
        </div>

        <div className="home-intro-content">
          I bridge the gaps between business and technology.
          My passion lies where technology meets Finance and Healthcare.
          I bring my business + client consultation experiences and coding skills to the table.

          Recently, I moved to Vancouver to accommodate my partner. Before moving to Canada,
          I worked as a Tech Consultant at <a href="https://www.kpmg.com" target="_blank"><u>KPMG's</u></a> New York office.
          For three years, I advised and inspected world’s largest financial institutions with their tech architecture & design
          + information management strategies. See my previous work experience on <a href="https://www.linkedin.com/in/wjhong/" target="_blank"><u>LinkedIn</u></a>.

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
            <a href="https://www.instagram.com/bitchy.richy/"
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
