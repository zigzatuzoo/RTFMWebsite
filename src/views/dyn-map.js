import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dyn-map.css'

const DynMap = (props) => {
  return (
    <div className="dyn-map-container">
      <Helmet>
        <title>DynMap - RTFMWebsite</title>
        <meta property="og:title" content="DynMap - RTFMWebsite" />
      </Helmet>
      <div className="dyn-map-container1">
        <img
          alt="image"
          src="https://i.imgur.com/0NGNFyE.png"
          className="dyn-map-image"
        />
        <Link to="/" className="dyn-map-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="dyn-map-navlink1 button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="dyn-map-navlink2 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/forums" className="dyn-map-navlink3 button">
          <span>
            <span>Forums</span>
            <br></br>
          </span>
        </Link>
        <button className="dyn-map-button button">
          <Link to="/members" className="dyn-map-navlink4">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <iframe
        src="https://dynmap.rtfmserver.online/"
        className="dyn-map-iframe"
      ></iframe>
    </div>
  )
}

export default DynMap
