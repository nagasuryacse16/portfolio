import './HeroImg3.css';
import React, { Component } from 'react';
import laptop from '../Assets/laptop.jpg';

class HeroImg3 extends Component{
    render(){
    return(
        <div className='hero3'>
            <div className='hero__image3'>
                <img className="hero__banner3" src={laptop} alt="Laptop_hero"/>
            </div>

            
            <div className='hero__content3'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        
        </div>
    );
}
}

export default HeroImg3;