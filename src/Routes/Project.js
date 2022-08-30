import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import ProjectLanding from '../Components/ProjectLanding';

 const Project = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading="PROJECTS." text="This is some of my recent project works."/>
            <ProjectLanding/>
            <Footer/>
        </div>
    );
  };
  
  export default Project;