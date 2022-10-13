import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>RTFMWebsite</title>
        <meta property="og:title" content="RTFMWebsite" />
      </Helmet>
      <div className="home-container1">
        <a
          href="https://store.rtfmserver.online/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <img
            alt="image"
            src="https://i.imgur.com/0NGNFyE.png"
            className="home-image button"
          />
        </a>
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
        <Link to="/blog" className="home-navlink3 button">
          <span>
            <span>Blog</span>
            <br></br>
          </span>
        </Link>
        <button className="home-button button">
          <Link to="/members" className="home-navlink4">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
        <span className="home-text14">Click to Donate -&gt;</span>
      </div>
      <div className="home-container2">
        <div className="home-container3">
          <span className="home-text15">
            Welcome to the RTFM website!  Explore around and maybe join the
            server!
          </span>
          <img
            alt="image"
            src="https://i.imgur.com/0NGNFyE.png"
            className="home-image1"
          />
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-text16">
          © 2022 RTFM Group, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Home
