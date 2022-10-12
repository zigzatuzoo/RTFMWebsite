import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - RTFM Server</title>
        <meta
          property="og:title"
          content="AboutUs - RTFM Server"
        />
      </Helmet>
      <div className="about-us-container1">
        <Link to="/" className="about-us-builds button">
          Home
        </Link>
        <Link to="/builds" className="about-us-about-us button">
          Builds
        </Link>
        <Link to="/dyn-map" className="about-us-dyn-map button">
          DynMap
        </Link>
        <Link to="/members" className="about-us-navlink button">
          <span>
            <span>Members</span>
            <br></br>
          </span>
        </Link>
      </div>
      
      <span className='copyright'>
        Copyright © RTFM Group 2022
      </span>
      
    </div>
  )
}

export default AboutUs
