import React from 'react';
import styles from './Contact.css';
import {myEmail} from '../../../../config';
import nodemailer from 'nodemailer';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: {
        name: false,
        email: false,
        phone: false,
        message: false
      },
      sent: false
    }
  }
  onSubmit(e){
    e.preventDefault();
    let name_value = e.target.elements.name.value;
    let email_value = e.target.elements.email.value;
    let phone_value = e.target.elements.phone.value;
    let message_value = e.target.elements.message.value;
    const error = {
      name: !name_value,
      email: !email_value,
      phone: !phone_value,
      message: !message_value
    }
    this.setState((prevState)=>({
      error
    }));
    if(!error.name && !error.email && !error.phone && !error.message){
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: myEmail.user,
          pass: myEmail.pass
        }
      });
      let mailOptions = {
        from: `${name_value} <${email_value}>`,
        to: myEmail.user,
        subject: `${name_value} sent message from Caring Songs Website`,
        text: message_value
      };
      transporter.sendMail(mailOptions, (email_error,info)=>{
        if(email_error){
          console.log(email_error);
        }
        else{
          console.log('Email sent: ' + info.response);
        }
      });
    }
    else{
      console.log('There was error in message form');
    }
  }
  render() {
    return (
      <section id="contact" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className={`section-heading text-uppercase ${styles.heading}`}>Contact Us</h2>
              <h3 className={`section-subheading text-muted ${styles.subheading}`}>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className={`form-group ${styles.form_group}`}>
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" />
                      <p className="help-block text-danger">{this.state.error.name ? "Please enter your name" : undefined}</p>
                    </div>
                    <div className={`form-group ${styles.form_group}`}>
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" />
                      <p className="help-block text-danger">{this.state.error.email? "Please enter your email address" : undefined}</p>
                    </div>
                    <div className={`form-group ${styles.form_group}`}>
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" />
                      <p className="help-block text-danger">{this.state.error.phone? "Please enter your phone number" : undefined}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className={`form-control ${styles.textarea}`} id="message" placeholder="Your Message *" required="required" ></textarea>
                      <p className="help-block text-danger">{this.state.error.message ? "Please enter a message" : undefined}</p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <button id="sendMessageButton" 
                      className={`btn btn-primary btn-xl text-uppercase ${styles.btn}`} 
                      type="submit">Send Message</button>
                    <p className="help-block text-success">{this.state.sent ? "Thank you for your contact. We will contact you as soon as possible." : undefined }</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}