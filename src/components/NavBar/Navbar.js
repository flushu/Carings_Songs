import React from 'react';
import styles from './Navbar.css';

export default class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${styles.mainNav}`} id="mainNav">
        <div className="container">
          <a className={`navbar-brand js-scroll-trigger ${styles.navbar_brand}`} href="#page-top">Caring Songs for All Creatures</a>
          <button className={`navbar-toggler ${styles.navbar_toggler}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className={`navbar-nav ml-auto text-uppercase ${styles.navbar_nav}`}>
              <li className={`nav-item ${styles.nav_item}`}>
                <a className={`nav-link js-scroll-trigger ${styles.nav_link}`} href="#about">About</a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a className={`nav-link js-scroll-trigger ${styles.nav_link}`} href="#profile">Profile</a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a className={`nav-link js-scroll-trigger ${styles.nav_link}`} href="#story">Story</a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a className={`nav-link js-scroll-trigger ${styles.nav_link}`} href="#contact">Contact</a>
              </li>
              <li className={`nav-item ${styles.nav_item} ${styles.donate}`}>
                <a className={`nav-link js-scroll-trigger ${styles.nav_link}`} href="#donate">Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}