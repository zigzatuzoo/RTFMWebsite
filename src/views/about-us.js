import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - RTFMWebsite</title>
        <meta property="og:title" content="About-Us - RTFMWebsite" />
      </Helmet>
      <div className="about-us-container1">
        <span className="about-us-text">About Us</span>
      </div>
      <div className="about-us-sidebar">
        <nav className="about-us-nav">
          <img
            alt="image"
            src="https://i.imgur.com/0NGNFyE.png"
            className="about-us-image"
          />
          <div
            data-thq="thq-dropdown"
            className="about-us-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="about-us-dropdown-toggle"
            >
              <span className="about-us-text1">
                <span>Pages</span>
                <br></br>
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="about-us-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="about-us-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="about-us-dropdown-list"
            ></ul>
            <ul
              data-thq="thq-dropdown-list"
              className="about-us-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle1"
                >
                  <Link to="/" className="about-us-link">
                    Home
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle2"
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-link1"
                  >
                    <span className="about-us-text4">
                      About
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="about-us-text5">Us</span>
                  </a>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle3"
                >
                  <span className="about-us-link2">Builds</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle4"
                >
                  <Link to="/dyn-map" className="about-us-link3">
                    DynMap
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle5"
                >
                  <span className="about-us-link4">Members</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="about-us-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="about-us-dropdown-toggle6"
                >
                  <a
                    href="https://rtfmforum.pages.dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-link5"
                  >
                    Forums
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="about-us-container2">
          <a
            href="https://store.rtfmserver.online/"
            target="_blank"
            rel="noreferrer noopener"
            className="about-us-link6"
          >
            <img
              alt="image"
              src="https://i.imgur.com/0NGNFyE.png"
              className="about-us-image1 button"
            />
          </a>
          <span className="about-us-text6">&lt;-Click to Donate</span>
        </div>
      </div>
      <footer className="about-us-footer">
        <span className="about-us-text7">
          © 2022 RTFM Group, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default AboutUs
