import "./App.css";
import React, { Component } from 'react'
import MediaNavbar from './Component/MediaNavbar'
import News from './Component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <Router>
        <MediaNavbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" category="general"/></Route>
          <Route exact path="/business"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" category="business"/></Route>
          <Route exact path="/health"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" category="health"/></Route>
          <Route exact path="/science"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" category="science"/></Route>
          <Route exact path="/sports"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" category="technology"/></Route>
        </Switch> 
      </Router>
      </>
    )
  }
}

export default App

