import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - RTFMWebsite</title>
        <meta property="og:title" content="Blog - RTFMWebsite" />
      </Helmet>
      <div className="blog-container1">
        <img
          alt="image"
          src="https://i.imgur.com/0NGNFyE.png"
          className="blog-image"
        />
        <Link to="/" className="blog-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="blog-navlink1 button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="blog-navlink2 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link to="/dyn-map" className="blog-navlink3 button">
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className="blog-button button">
          <Link to="/members" className="blog-navlink4">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="blog-blog">
        <div className="blog-container2">
          <BlogPostCard2
            label="Test"
            author="Nate"
            image_src="https://i.imgur.com/0NGNFyE.png"
            description="Test"
            profile_src="https://i.imgur.com/0NGNFyE.png"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
        </div>
        <div className="blog-container3">
          <BlogPostCard2
            label="N3rds"
            title="NERD"
            author="Nate"
            image_src="https://i.imgur.com/0NGNFyE.png"
            description="N3rdinc"
            profile_src="https://i.imgur.com/0NGNFyE.png"
            rootClassName="rootClassName"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          author="Nate"
          image_src="https://i.imgur.com/0NGNFyE.png"
          profile_src="https://i.imgur.com/0NGNFyE.png"
          rootClassName="rootClassName2"
        ></BlogPostCard2>
      </div>
    </div>
  )
}

export default Blog
