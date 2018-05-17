import React from 'react';
import styles from './Header.css';
import banner from './banner_1900.jpg';
import banner2 from './banner2_1900.jpg';
import banner3 from './banner3_1900.jpg';

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className={`carousel-item active`}>
              <img className="d-block w-100" src={banner} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>First Slide</h3>
                <p>This is a description for the first slide.</p>
              </div>
            </div>
            <div className={`carousel-item`}>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
            <div className={`carousel-item`}>
              <img className="d-block w-100" src={banner3} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    )
  }
}