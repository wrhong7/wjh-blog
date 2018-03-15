import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/home";
import NavBar from "./components/navBar";
import Library from "./components/library";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";

import "../styles/home.scss"
import "../styles/main.scss"
import "../styles/navbarWeb.scss"
import "../resources/home-web-image2.jpg"

export default function App ({props}) {

  const goToLandingPage = () => {
    return <Home/>
  };

  const goToLibrary = () => {
    return <Library/>
  }

  const goToBlog = () => {
    return <Blog/>
  }

  const goToPortfolio = () => {
    return <Portfolio/>
  }

  return <BrowserRouter>
    <div id="application-container">
      <div><NavBar/></div>
        <Switch>
          <Route exact path="/" component={goToLandingPage}/>
          <Route exact path="/library" component={goToLibrary}/>
          <Route exact path="/blog" component={goToBlog}/>
          <Route exact path="/portfolio" component={goToPortfolio}/>
        </Switch>
    </div>
  </BrowserRouter>;
}