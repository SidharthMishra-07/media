import "./App.css";
import React, { useState } from 'react'
import MediaNavbar from './Component/MediaNavbar'
import News from './Component/News'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const apiKey = process.env.REACT_APP_NEWS_API   //Hiding the API Key in the local env

  const [progress, setProgress] = useState(0)
  
    return (
      <>
        <Router>
          <MediaNavbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" category="general" /></Route>
            <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" category="business" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" category="health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" /></Route>
          </Switch>
        </Router>
      </>
    )
}

export default App

