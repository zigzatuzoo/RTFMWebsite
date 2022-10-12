import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dyn-map.css'

const DynMap = (props) => {
  return (
    <div className="dyn-map-container">
      <Helmet>
        <title>DynMap - Attached Long Chimpanzee</title>
        <meta property="og:title" content="DynMap - Attached Long Chimpanzee" />
      </Helmet>
      <div className="dyn-map-html-node">
        <span
          dangerouslySetInnerHTML={{
            __html:
              '<!doctype html>\r\n<html lang="en">\r\n\r\n<head>\r\n    <meta charset="utf-8">\r\n    <title>My Dynmap!</title>\r\n    <style>\r\n        * {\r\n            margin: 0;\r\n            padding: 0;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        body,\r\n        html,\r\n        iframe {\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n\r\n        iframe {\r\n            border: none;\r\n        }\r\n\r\n        body {\r\n            display: flex;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <iframe width="100%" height="100%" src="http://mc.freebuilders.org:8123/">\r\n    </iframe>\r\n</body>',
          }}
        />
      </div>
      <div className="dyn-map-container1">
        <Link to="/" className="dyn-map-navlink button">
          <span>
            <span>Home</span>
            <br></br>
          </span>
        </Link>
        <Link to="/about-us" className="dyn-map-navlink1 button">
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link to="/builds" className="dyn-map-navlink2 button">
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <button className="dyn-map-button button">
          <Link to="/members" className="dyn-map-navlink3">
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default DynMap
