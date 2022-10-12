import React from 'react'
import { Link } from 'react-router-dom'

import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/logo.png"
            className={styles['image']}
          />
          <span className={styles['text']}>
            Welcome to the RTFM website!  Explore around and maybe join the
            server!
          </span>
        </div>
        <Link
          to="/about-us"
          className={` ${styles['navlink']} ${projectStyles['button']} `}
        >
          <span>
            <span>About Us</span>
            <br></br>
          </span>
        </Link>
        <Link
          to="/builds"
          className={` ${styles['navlink1']} ${projectStyles['button']} `}
        >
          <span>
            <span>Builds</span>
            <br></br>
          </span>
        </Link>
        <Link
          to="/dyn-map"
          className={` ${styles['navlink2']} ${projectStyles['button']} `}
        >
          <span>
            <span>DynMap</span>
            <br></br>
          </span>
        </Link>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          <Link to="/members" className={styles['navlink3']}>
            <span>Members</span>
            <br></br>
          </Link>
        </button>
      </div>
      <span className={styles['text12']}>Copyright @ RTFM Group 2022</span>
    </div>
  )
}

export default Home

