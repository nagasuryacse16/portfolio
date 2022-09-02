import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContent.css';
import react3 from '../Assets/react3.jpeg';
import react1 from '../Assets/react3.png';

function AboutContent() {
    return ( 
        <div className='about'>
            <div className='about__left'>
                <h1>Who Am I?</h1>
                <p>Hi, my name is Nagasurya Jeysankar. The Developer you need. I'm a react front-end developer. I create responsive websites for my clients.</p>
                <Link to="/contact">
                    <button className='btn'>contact</button>
                </Link>
            </div>
            <div className='about__right'>
                    <div className='image__container'>
                        <div className='image__stack top'>
                            <img src={react3} className="img" alt="react-image1"/>
                        </div>
                        <div className='image__stack bottom'>
                            <img src={react1} className="img" alt="react-image2"/>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default AboutContent;