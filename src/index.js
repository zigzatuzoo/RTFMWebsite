import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Members from './views/members'
import DynMap from './views/dyn-map'
import AboutUs from './views/about-us'
import Builds from './views/builds'
import Home from './views/home'
import Forums from './views/forums'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Members} exact path="/members" />
        <Route component={DynMap} exact path="/dyn-map" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Builds} exact path="/builds" />
        <Route component={Home} exact path="/" />
        <Route component={Forums} exact path="/forums" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
