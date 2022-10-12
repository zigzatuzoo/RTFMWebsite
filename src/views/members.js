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
          src="https://i.imgur.com/0NGNFyE.png"
          alt="image"
          className="members-image"
        />
        <Link to="/about-us" className="members-navlink button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="members-navlink1 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="members-navlink2 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="members-button button">
          <Link to="/members" className="members-navlink3">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <iframe
        src="https://discord.com/widget?id=719543478270296074&amp;theme=dark"
        className="members-iframe"
      ></iframe>
      <h1 className="members-text11">Join The Discord Here -&gt;</h1>
    </div>
  )
}

export default Members
