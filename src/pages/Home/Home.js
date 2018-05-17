import React from 'react';
import styles from './Home.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from './Header/Header';
import About from './About/About';
import Profile from './Profile/Profile';
import Story from './Story/Story';
import Contact from './Contact/Contact';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Navbar />
        <Header />
        <About />
        <Profile />
        <Story />
        <Contact />
        <Footer />
      </div>
    );
  }
};