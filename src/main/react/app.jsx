import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/home";
import NavBar from "./components/navBar";
import Library from "./components/library";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Cureconnect from "./components/cureconnect.jsx";

import "../styles/blog.scss"
import "../styles/home.scss"
import "../styles/library.scss"
import "../styles/main.scss"
import "../styles/navbarWeb.scss"
import "../styles/portfolio.scss"
import "../styles/cureconnectpage.scss"
import "../resources/home-web-image2.jpg"
import "../resources/proDevMap1.png"

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

  const goToCureConnect = () => {
    return <Cureconnect/>
  }

  return <BrowserRouter>
    <div id="application-container">
      <div><NavBar/></div>
        <Switch>
          <Route exact path="/" component={goToLandingPage}/>
          <Route exact path="/library" component={goToLibrary}/>
          <Route exact path="/blog" component={goToBlog}/>
          <Route exact path="/portfolio" component={goToPortfolio}/>
          <Route exact path="/portfolio/cureconnect" component={goToCureConnect}/>
        </Switch>
    </div>
  </BrowserRouter>;
}