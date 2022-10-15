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
      <div className="home-container1"></div>
      <div className="home-container2">
        <div className="home-sidebar">
          <nav className="home-nav">
            <img
              alt="image"
              src="https://i.imgur.com/0NGNFyE.png"
              className="home-image"
            />
            <span className="home-text">
              Welcome to the RTFM website!  Explore around and maybe join the
              server!
            </span>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text1">
                  <span>Pages</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="home-dropdown-list"
              ></ul>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle1"
                  >
                    <Link to="/" className="home-link">
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle2"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link1"
                    >
                      <span>
                        About
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>Us</span>
                    </a>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle3"
                  >
                    <Link to="/builds" className="home-link2">
                      Builds
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle4"
                  >
                    <Link to="/dyn-map" className="home-link3">
                      DynMap
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle5"
                  >
                    <Link to="/members" className="home-link4">
                      Members
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown5 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle6"
                  >
                    <a
                      href="https://rtfmforum.pages.dev/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      Forums
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="home-container3">
            <a
              href="https://store.rtfmserver.online/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link6"
            >
              <img
                alt="image"
                src="https://i.imgur.com/0NGNFyE.png"
                className="home-image1 button"
              />
            </a>
            <span className="home-text6">&lt;-Click to Donate</span>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-text7">
          © 2022 RTFM Group, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Home
