import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';

 const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="CONTACT." text="Let's have a chat."/>
            <Footer/>
        </div>
    );
  };
  
  export default Contact;