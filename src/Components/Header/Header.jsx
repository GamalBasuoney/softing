import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../Assets/logo.png'
import app from '../../Assets/app-4.png'
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    {/* NAVBAR */}
    <header>
    <nav className={styles.position}>

      <div className={`${styles.container} ${styles.flex}`}>

        <div className={styles.menu} onClick={() => { setMenuOpen(!menuOpen); }}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <figure className={styles.navImg}>
          <img className={styles.navFigure} src={logo} />
        </figure>

        <ul className={`${styles.flex} ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">features</a></li>
          <li><a href="#">overview</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">team</a></li>
          <li><a href="#">pages</a></li>
          <li><a href="#">contact</a></li>
        </ul>

        <div>
          <a className={styles.btn} href="#">try it free</a>
        </div>
      </div>
      </nav>

{/* HOME */}

      <div className={styles.bg}>
          <div className={`${styles.space} ${styles.container} ${styles.flexHome}`}>
  
            <article>
            <h1 className={styles.text}>
            We're Building <span className={styles.word}>Software</span> For
                You
              </h1>
              <p className={styles.paragraph}>
                Celebrated delightful an especially increasing instrument am.
                Indulgence contrasted sufficient to unpleasant in in insensible
                favourable. Latter remark hunted enough vulgar say man. Sitting
                hearted on it without me.
              </p>
              <div>
                <a href="#" className={styles.btnStarted}>get started</a>
              </div>
            </article>

            <figure className={styles.homeImg}>
              <img className={styles.homeFigure} src={app} />
            </figure>

          </div>


        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9f1fb" fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,26.7C480,21,600,11,720,21.3C840,32,960,64,1080,74.7C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>




</header>
    </>
  )
}
