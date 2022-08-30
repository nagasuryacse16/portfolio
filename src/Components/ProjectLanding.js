import React from 'react';
import './ProjectCard.css';
import ProjectCard from './ProjectCard';
import ProjectCardData from './ProjectCardData';

function ProjectLanding() {
    return ( 
        <div className='project'>
            <div className='project__container'>
                    {ProjectCardData.map((value, index)=>{
                            return(
                                <ProjectCard
                                    key={index}
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    text={value.text}
                                    view={value.view}/>
                            )
                    })} 
            </div>
        </div>    
     );
}

export default ProjectLanding;