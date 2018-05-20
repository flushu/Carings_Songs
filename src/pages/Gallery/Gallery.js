import React from 'react';
import styles from './Gallery.css';
import gallery_cat from './img/gallery_cat.jpg';
import gallery_puffy_alice from './img/gallery_puffy_alice.jpg';
import gallery_puffy_mike from './img/gallery_puffy_mike.jpg';
import gallery_puffy from './img/gallery_puffy.jpg';
import gallery_thor from './img/gallery_thor.jpg';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.gallery}>
        <div className={`container ${styles.gallery_container}`}>
          <h1>Caring Songs for All Creatures Gallery</h1>
          <p className={`${styles.page_description} text-center`}>Thumbnails With Title And Description</p>
          <div className={`tz-gallery ${styles.tz_gallery}`}>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className={`thumbnail ${styles.thumbnail}`}>
                  <a className={`lightbox ${styles.lightbox}`} href={gallery_cat}>
                    <img className={`w-100`} src={gallery_cat} alt="Cats" />
                  </a>
                  <div className={`caption ${styles.caption}`}>
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className={`thumbnail ${styles.thumbnail}`}>
                  <a className={`lightbox ${styles.lightbox}`} href={gallery_puffy}>
                    <img className={`w-100`} src={gallery_puffy} alt="Puffy" />
                  </a>
                  <div className={`caption ${styles.caption}`}>
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className={`thumbnail ${styles.thumbnail}`}>
                  <a className={`lightbox ${styles.lightbox}`} href={gallery_puffy_alice}>
                    <img className={`w-100`} src={gallery_puffy_alice} alt="Puffy with Dr. Alice" />
                  </a>
                  <div className={`caption ${styles.caption}`}>
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className={`thumbnail ${styles.thumbnail}`}>
                  <a className={`lightbox ${styles.lightbox}`} href={gallery_puffy_mike}>
                    <img className={`w-100`} src={gallery_puffy_mike} alt="Puffy with Mike" />
                  </a>
                  <div className={`caption ${styles.caption}`}>
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className={`thumbnail ${styles.thumbnail}`}>
                  <a className={`lightbox ${styles.lightbox}`} href={gallery_thor}>
                    <img className={`w-100`} src={gallery_thor} alt="Thor" />
                  </a>
                  <div className={`caption ${styles.caption}`}>
                    <h3>Thumbnail label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}