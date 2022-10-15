import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutUs from './views/about-us'
import Builds from './views/builds'
import DynMap from './views/dyn-map'
import Members from './views/members'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Builds} exact path="/builds" />
        <Route component={DynMap} exact path="/dyn-map" />
        <Route component={Members} exact path="/members" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
