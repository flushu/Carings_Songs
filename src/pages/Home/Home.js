import React from 'react';
import styles from './Home.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from './Header/Header';
import About from './About/About';
import Profile from './Profile/Profile';
import Story from './Story/Story';
import Contact from './Contact/Contact';
import ProfileModal from '../../components/ProfileModal/ProfileModal';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profileClickIndex: 0 
    }
    this.handleClickProfile = this.handleClickProfile.bind(this);
  }
  handleClickProfile(index){
    this.setState(()=>({
      profileClickIndex: index
    }));
    console.log(`index: ${this.state.profileClickIndex}`);
  }
  render(){
    return(
      <div>
        <Navbar />
        <Header />
        <About />
        <Profile profileIndex={this.handleClickProfile} />
        <Story />
        <Contact />
        <Footer />
        <ProfileModal index={this.state.profileClickIndex} />
      </div>
    );
  }
};