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
        <span className="members-text">Members</span>
      </div>
      <div className="members-container2">
        <div className="members-sidebar">
          <nav className="members-nav">
            <img
              alt="image"
              src="https://i.imgur.com/0NGNFyE.png"
              className="members-image"
            />
            <div
              data-thq="thq-dropdown"
              className="members-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="members-dropdown-toggle"
              >
                <span className="members-text1">
                  <span>Pages</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="members-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="members-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="members-dropdown-list"
              ></ul>
              <ul
                data-thq="thq-dropdown-list"
                className="members-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle1"
                  >
                    <Link to="/" className="members-link">
                      Home
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle2"
                  >
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="members-link1"
                    >
                      <span className="members-text4">
                        About
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="members-text5">Us</span>
                    </a>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle3"
                  >
                    <span className="members-link2">Builds</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle4"
                  >
                    <Link to="/dyn-map" className="members-link3">
                      DynMap
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown4 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle5"
                  >
                    <span className="members-link4">Members</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="members-dropdown5 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="members-dropdown-toggle6"
                  >
                    <a
                      href="https://rtfmforum.pages.dev/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="members-link5"
                    >
                      Forums
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="members-container3">
            <a
              href="https://store.rtfmserver.online/"
              target="_blank"
              rel="noreferrer noopener"
              className="members-link6"
            >
              <img
                alt="image"
                src="https://i.imgur.com/0NGNFyE.png"
                className="members-image1 button"
              />
            </a>
            <span className="members-text6">&lt;-Click to Donate</span>
          </div>
          <iframe
            src="https://discord.com/widget?id=719543478270296074&amp;theme=dark"
            className="members-iframe"
          ></iframe>
        </div>
      </div>
      <footer className="members-footer">
        <span className="members-text7">
          © 2022 RTFM Group, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Members
