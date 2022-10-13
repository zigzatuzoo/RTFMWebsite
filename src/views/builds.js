import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
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
          alt="image"
          src="https://i.imgur.com/0NGNFyE.png"
          className="builds-image"
        />
        <Link to="/" className="builds-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="builds-navlink1 button">
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
        <Link to="/forums" className="builds-navlink3 button">
          <span>
            <span>Forums</span>
            <br></br>
          </span>
        </Link>
        <button className="builds-button button">
          <Link to="/members" className="builds-navlink4">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="builds-gallery">
        <GalleryCard1
          rootClassName="rootClassName"
          title="Tree Farm"
          subtitle="We are always trying to find new ways to automate anything we can, as well as making it look good in the process."
          image_src="https://i.imgur.com/mmozsL8.jpg"
        ></GalleryCard1>
      </div>
    </div>
  )
}

export default Builds
