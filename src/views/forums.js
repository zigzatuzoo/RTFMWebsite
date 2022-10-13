import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import './forums.css'

const Forums = (props) => {
  return (
    <div className="forums-container">
      <Helmet>
        <title>Forums - RTFMWebsite</title>
        <meta property="og:title" content="Forums - RTFMWebsite" />
      </Helmet>
      <div className="forums-container1">
        <img
          alt="image"
          src="https://i.imgur.com/0NGNFyE.png"
          className="forums-image"
        />
        <Link to="/" className="forums-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="forums-navlink1 button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="forums-navlink2 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="forums-navlink3 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="forums-button button">
          <Link to="/members" className="forums-navlink4">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="forums-blog">
        <div className="forums-container2">
          <BlogPostCard2
            profile_src="https://i.imgur.com/0NGNFyE.png"
            rootClassName="rootClassName3"
            image_src="https://i.imgur.com/0NGNFyE.png"
            label="Test"
            description="Test"
            author="Nate"
          ></BlogPostCard2>
        </div>
        <div className="forums-container3">
          <BlogPostCard2
            image_src="https://i.imgur.com/0NGNFyE.png"
            profile_src="https://i.imgur.com/0NGNFyE.png"
            rootClassName="rootClassName"
            author="Nate"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          image_src="https://i.imgur.com/0NGNFyE.png"
          profile_src="https://i.imgur.com/0NGNFyE.png"
          rootClassName="rootClassName2"
          author="Nate"
        ></BlogPostCard2>
      </div>
    </div>
  )
}

export default Forums
