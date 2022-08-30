import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return(
        
                <div className='project__card'>
                    <img src={props.imgsrc} alt='project_image'/>
                    <h2 className='project__title'>{props.title}</h2>
                    <div className='project__details'>
                        <p>{props.text}</p>
                    </div>
                    <div className='project__buttons'>
                            <button className="btn"><a href={props.view} target="_blank" rel="noopener noreferrer">View Website</a></button>
                    </div>
                </div>
            
    );
};

export default ProjectCard;