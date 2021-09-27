import "./App.css";
import React, { Component } from 'react'
import MediaNavbar from './Component/MediaNavbar'
import News from './Component/News'

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

