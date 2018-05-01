import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/home";
import NavBar from "./components/navBar";
import Library from "./components/library";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Principles from "./components/principles";
import Cureconnect from "./components/subprojects/cureconnect/cureconnect.jsx";
import Cureconnect1 from "./components/subprojects/cureconnect/cureconnect1.jsx";
import Cureconnect2 from "./components/subprojects/cureconnect/cureconnect2.jsx";
import Cureconnect3 from "./components/subprojects/cureconnect/cureconnect3.jsx";
import Cureconnect4 from "./components/subprojects/cureconnect/cureconnect4.jsx";
import Cureconnect5 from "./components/subprojects/cureconnect/cureconnect5.jsx";
import Cureconnect6 from "./components/subprojects/cureconnect/cureconnect6.jsx";
import Rpa from "./components/subprojects/rpa.jsx";
import Comedy from "./components/comedy.jsx";

import "../styles/blog.scss"
import "../styles/home.scss"
import "../styles/library.scss"
import "../styles/main.scss"
import "../styles/navbarWeb.scss"
import "../styles/portfolio.scss"
import "../styles/principles.scss"
import "../styles/cureconnectpage.scss"
import "../styles/comedy.scss"
import "../styles/rpa.scss"
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

  const goToPrinciples = () => {
    return <Principles/>
  }

  const goToCureConnect = () => {
    return <Cureconnect/>
  }

  const goToCureConnect1 = () => {
    return <Cureconnect1/>
  }

  const goToCureConnect2 = () => {
    return <Cureconnect2/>
  }

  const goToCureConnect3 = () => {
    return <Cureconnect3/>
  }

  const goToCureConnect4 = () => {
    return <Cureconnect4/>
  }

  const goToCureConnect5 = () => {
    return <Cureconnect5/>
  }

  const goToCureConnect6 = () => {
    return <Cureconnect6/>
  }

  const rpa = () => {
    return <Rpa/>
  }

  const comedy = () => {
    return <Comedy/>
  }

  return <BrowserRouter>
    <div id="application-container">
      <div><NavBar/></div>
        <Switch>
          <Route exact path="/" component={goToLandingPage}/>
          <Route exact path="/library" component={goToLibrary}/>
          <Route exact path="/blog" component={goToBlog}/>
          <Route exact path="/portfolio" component={goToPortfolio}/>
          <Route exact path="/principles" component={goToPrinciples}/>
          <Route exact path="/portfolio/cureconnect" component={goToCureConnect}/>
          <Route exact path="/portfolio/cureconnect/step1" component={goToCureConnect1}/>
          <Route exact path="/portfolio/cureconnect/step2" component={goToCureConnect2}/>
          <Route exact path="/portfolio/cureconnect/step3" component={goToCureConnect3}/>
          <Route exact path="/portfolio/cureconnect/step4" component={goToCureConnect4}/>
          <Route exact path="/portfolio/cureconnect/step5" component={goToCureConnect5}/>
          <Route exact path="/portfolio/cureconnect/step6" component={goToCureConnect6}/>
          <Route exact path="/portfolio/rpa" component={rpa}/>
          <Route exact path="/comedy" component={comedy}/>
        </Switch>
    </div>
  </BrowserRouter>;
}