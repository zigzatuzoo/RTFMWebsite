import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './members.css'

const Members = (props) => {
  return (
    <div className="members-container">
      <Helmet>
        <title>Members - RTFM Server</title>
        <meta
          property="og:title"
          content="Members - RTFM Server"
        />
      </Helmet>
      <div className="members-container1">
        <Link to="/" className="members-builds button">
          Home
        </Link>
        <Link to="/about-us" className="members-about-us button">
          About Us
        </Link>
        <Link to="/builds" className="members-navlink button">
          Builds
        </Link>
        <Link to="/dyn-map" className="members-dyn-map button">
          DynMap
        </Link>
      </div>
      <span className='copyright'>
        Copyright © RTFM Group 2022
      </span>
      <div className="members-html-node">
        <span
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://discord.com/widget?id=719543478270296074&theme=dark" width="350" height="500"\r\n    allowtransparency="true" frameborder="0"\r\n    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>',
          }}
        />
      </div>
    </div>
  )
}

export default Members
