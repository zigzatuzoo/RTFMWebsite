import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './members.css'

const Members = (props) => {
  return (
    <div className="members-container">
      <Helmet>
        <title>Members - RTFMWebsite</title>
        <meta property="og:title" content="Members - RTFMWebsite" />
      </Helmet>
      <div className="members-container1">
        <img
          alt="image"
          src="https://i.imgur.com/0NGNFyE.png"
          className="members-image"
        />
        <Link to="/" className="members-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="members-navlink1 button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="members-navlink2 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="members-navlink3 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <Link to="/blog" className="members-navlink4 button">
          <span>
            <span>Blog</span>
            <br></br>
          </span>
        </Link>
      </div>
      <iframe
        src="https://discord.com/widget?id=719543478270296074&amp;theme=dark"
        className="members-iframe"
      ></iframe>
      <h1 className="members-text15">Join The Discord Here</h1>
    </div>
  )
}

export default Members
