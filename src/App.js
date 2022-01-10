import "./App.css";
import React, { Component } from 'react'
import MediaNavbar from './Component/MediaNavbar'
import News from './Component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <MediaNavbar/>
        <News/>
      </>
    )
  }
}

export default App

