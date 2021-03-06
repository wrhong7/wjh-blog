import React from "react";
import firebase from '../../../../src/firebase.js';
import {Link, Route} from 'react-router-dom';

//here we should export images

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-web-container">
        <div className="navbar-web-left">
          <div className="navbar-web-logo">홍</div>
        </div>
        <div className="navbar-web-right">
          <a className="navbar-button navbar-portfolio-button" href="/comedy">comedy</a>
          <a className="navbar-button navbar-portfolio-button" href="/principles">principles</a>
          <a className="navbar-button navbar-portfolio-button" href="/portfolio">portfolio</a>
          <a className="navbar-button navbar-library-button" href="/library">library</a>
          <a className="navbar-button navbar-blog-button" href="/blog">blog</a>
          <a className="navbar-button navbar-home-button" href="/">main</a>
        </div>
      </div>
    )
  }
}
