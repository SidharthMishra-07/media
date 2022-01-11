import "./App.css";
import React, { Component } from 'react'
import MediaNavbar from './Component/MediaNavbar'
import News from './Component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <MediaNavbar/>
        <Switch>
          <Route exact path="/"><News key="general" category="general"/></Route>
          <Route exact path="/business"><News key="business" category="business"/></Route>
          <Route exact path="/health"><News key="health" category="health"/></Route>
          <Route exact path="/science"><News key="science" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" category="technology"/></Route>
        </Switch> 
      </Router>
      </>
    )
  }
}

export default App

