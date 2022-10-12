import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './builds.css'

const Builds = (props) => {
  return (
    <div className="builds-container">
      <Helmet>
        <title>Builds - RTFMWebsite</title>
        <meta property="og:title" content="Builds - RTFMWebsite" />
      </Helmet>
      <div className="builds-container1">
        <img
          src="https://i.imgur.com/0NGNFyE.png"
          alt="image"
          className="builds-image"
        />
        <Link to="/home" className="builds-navlink2 button">
          <span>
            <span>home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="builds-navlink button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="builds-navlink2 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="builds-button button">
          <Link to="/members" className="builds-navlink3">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Builds
