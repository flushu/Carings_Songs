import React from 'react';
import styles from './Profile.css';
import { NavLink } from 'react-router-dom';
import thumbnail_1 from './img/puffy_profile.jpg';
import thumbnail_2 from './img/profile_lj.jpeg';
import thumbnail_3 from './img/profile_thor.jpeg';
import thumbnail_4 from './img/profile_kittens.jpeg';
import thumbnail_5 from './img/05-thumbnail.jpg';
import thumbnail_6 from './img/06-thumbnail.jpg';

export default class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <section id="profile" className={`bg-light ${styles.section}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`text-uppercase ${styles.heading}`}>Profile</h2>
              <h3 className={`text-muted ${styles.subheading}`}>Profiles of Animals Alice and Julia Song took care of</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1" data-target="#profileModal" onClick={()=>this.props.profileIndex(0)}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={thumbnail_1} alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Puffy</h4>
                <p className="text-muted">Female 4 years old</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2" data-target="#profileModal" onClick={()=>this.props.profileIndex(1)}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={thumbnail_2} alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Lady Jane</h4>
                <p className="text-muted">Female ? years old</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3" data-target="#profileModal" onClick={()=>this.props.profileIndex(2)}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={thumbnail_3} alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Thor</h4>
                <p className="text-muted">Male ? years old</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4" data-target="#profileModal" onClick={()=>this.props.profileIndex(3)}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={thumbnail_4} alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Dizzy and Goldie Sisters (?)</h4>
                <p className="text-muted">Twin sisters ? years old</p>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className="col-lg-12 text-center">
              <NavLink to='/gallery'>
                <button id="sendMessageButton" className={`btn btn-primary btn-xl text-uppercase ${styles.btn}`} type="submit">
                  Go to Gallery
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}