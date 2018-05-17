import React from 'react';
import styles from './About.css';

export default class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className={styles.section} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center text-uppercase">About Us</h2>
              <hr className="star-light mb-5" />
              <p className="lead text-center">Caring Songs for All Creatures is a small non-profit animal rescue that seeks to provide “unadoptable” cats and dogs with a stable and loving forever home. The elderly, the infirmed, the unwanted and the misunderstood are selected from area animal shelters, nursed back to health and happiness and placed for adoption.</p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}