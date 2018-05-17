import React from 'react';
import styles from './Story.css';
import pic1 from './img/story1.jpg';
import pic2 from './img/2.jpg';
import pic3 from './img/3.jpg';
import pic4 from './img/4.jpg';

export default class Story extends React.Component {
  render() {
    return (
      <section id="story" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`text-uppercase ${styles.heading}`}>Successful Stories</h2>
              <h3 className={`text-muted ${styles.subheading}`}>Alice and Julia Song's journey with animals.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className={styles.timeline}>
                <li>
                  <div className={styles.timeline_image}>
                    <img className="rounded-circle img-fluid" src={pic1} alt="" />
                  </div>
                  <div className={styles.timeline_panel}>
                    <div className={styles.timeline_heading}>
                      <h4>March 2018</h4>
                      <h4 className="subheading">Puffy was adopted</h4>
                    </div>
                    <div className={styles.timeline_body}>
                      <p className="text-muted">Dr. Alice Song adopted Puffy from an animal shelter in Orange County. Puffy is happy. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus!</p>
                    </div>
                  </div>
                </li>
                <li className={styles.timeline_inverted}>
                  <div className={styles.timeline_image}>
                    <img className="rounded-circle img-fluid" src={pic2} alt="" />
                  </div>
                  <div className={styles.timeline_panel}>
                    <div className={styles.timeline_heading}>
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className={styles.timeline_body}>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.timeline_image}>
                    <img className="rounded-circle img-fluid" src={pic3} alt="" />
                  </div>
                  <div className={styles.timeline_panel}>
                    <div className={styles.timeline_heading}>
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className={styles.timeline_body}>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className={styles.timeline_inverted}>
                  <div className={styles.timeline_image}>
                    <img className="rounded-circle img-fluid" src={pic4} alt="" />
                  </div>
                  <div className={styles.timeline_panel}>
                    <div className={styles.timeline_heading}>
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className={styles.timeline_body}>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className={styles.timeline_inverted}>
                  <div className={`${styles.timeline_image} ${styles.image_btn}`}>
                    <h4>Be Part
                    <br/>Of Our
                    <br/>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}