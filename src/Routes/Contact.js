import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg3 from '../Components/HeroImg3';
import ContactForm from '../Components/ContactForm';

 const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg3 heading="CONTACT." text="Let's have a chat."/>
            <ContactForm/>
            <Footer/>
        </div>
    );
  };
  
  export default Contact;