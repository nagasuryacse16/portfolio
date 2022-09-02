import './HeroImg.css';
import React from 'react';
import HeroImage from '../Assets/laptop-wallpaper.jpg';
import {Link} from 'react-router-dom';

const HeroImg =()=>{
    return(
        <div className='hero'>
            <div className='hero__image'>
                <img className="hero__banner" src={HeroImage} alt="Laptop_hero"/>
            </div>

            <div className='hero__content'>
                <p>HI, I'M A</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className='btn'>
                        Projects
                    </Link>
                    <Link to="/contact" className='btn btn-light'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;