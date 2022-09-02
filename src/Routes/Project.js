import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectLanding from '../Components/ProjectLanding';
import HeroImg3 from '../Components/HeroImg3';

 const Project = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg3 heading="PROJECTS." text="This is some of my recent project works."/>
            <ProjectLanding/>
            <Footer/>
        </div>
    );
  };
  
  export default Project;