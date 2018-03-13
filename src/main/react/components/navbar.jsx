import React from "react";
import firebase from '../../../../src/firebase.js';
import {Link, Route} from 'react-router-dom';

//here we should export images

export default class NavBar extends React.Component {
  render() {
    return (<div className="navbar-web-container">
        <div>Route Paths</div>
        <a href="/">home</a>
        <a href="/blog">blog</a>
        <a href="/library">library</a>
        <a href="/portfolio">portfolio</a>
      </div>
    )
  }
}
