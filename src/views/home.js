import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>RTFM Server</title>
        <meta property="og:title" content="RTFM Server" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <img
            alt="image"
            src="/playground_assets/capture-removebg-preview-400h.png"
            className="home-image"
          />
          <span className="home-text">
            Welcome to the RTFM website!  Explore around and maybe join the
            server!
          </span>
        </div>
      </div>
      <div className="home-container3">
        <Link to="/about-us" className="home-navlink button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="home-navlink1 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="home-navlink2 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="home-button button">
          <Link to="/members" className="home-navlink3">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <span className='copyright'>
        Copyright © RTFM Group 2022
      </span>
    </div>
  )
}

export default Home
