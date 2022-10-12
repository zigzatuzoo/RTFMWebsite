import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - RTFMWebsite</title>
        <meta property="og:title" content="AboutUs - RTFMWebsite" />
      </Helmet>
      <div className="about-us-container1">
        <img
          src="https://i.imgur.com/0NGNFyE.png"
          alt="image"
          className="about-us-image"
        />
        <Link to="/home" className="about-us-navlink2 button">
          <span>
            <span>home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="about-us-navlink1 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="about-us-navlink2 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="about-us-button button">
          <Link to="/members" className="about-us-navlink3">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default AboutUs
