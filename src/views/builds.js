import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './builds.css'

const Builds = (props) => {
  return (
    <div className="builds-container">
      <Helmet>
        <title>Builds - RTFMWebsite</title>
        <meta property="og:title" content="Builds - RTFMWebsite" />
      </Helmet>
      <div className="builds-container1">
        <span className="builds-text">Builds</span>
      </div>
      <div className="builds-sidebar">
        <nav className="builds-nav">
          <img
            alt="image"
            src="https://i.imgur.com/0NGNFyE.png"
            className="builds-image"
          />
          <div
            data-thq="thq-dropdown"
            className="builds-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="builds-dropdown-toggle"
            >
              <span className="builds-text1">
                <span>Pages</span>
                <br></br>
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="builds-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="builds-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="builds-dropdown-list"
            ></ul>
            <ul data-thq="thq-dropdown-list" className="builds-dropdown-list1">
              <li data-thq="thq-dropdown" className="builds-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle1"
                >
                  <Link to="/" className="builds-link">
                    Home
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="builds-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle2"
                >
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="builds-link1"
                  >
                    <span className="builds-text4">
                      About
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="builds-text5">Us</span>
                  </a>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="builds-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle3"
                >
                  <span className="builds-link2">Builds</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="builds-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle4"
                >
                  <Link to="/dyn-map" className="builds-link3">
                    DynMap
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="builds-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle5"
                >
                  <span className="builds-link4">Members</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="builds-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="builds-dropdown-toggle6"
                >
                  <a
                    href="https://rtfmforum.pages.dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="builds-link5"
                  >
                    Forums
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="builds-container2">
          <a
            href="https://store.rtfmserver.online/"
            target="_blank"
            rel="noreferrer noopener"
            className="builds-link6"
          >
            <img
              alt="image"
              src="https://i.imgur.com/0NGNFyE.png"
              className="builds-image1 button"
            />
          </a>
          <span className="builds-text6">&lt;-Click to Donate</span>
        </div>
      </div>
      <footer className="builds-footer">
        <span className="builds-text7">
          © 2022 RTFM Group, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Builds
