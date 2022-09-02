import React from 'react';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube} from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return ( 
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__left'>
                    <div className='footer__location'>
                        <h4><FaHome size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}/></h4>
                        <div>
                            <p>7, Athalai main road, Pothumbu,</p>
                            <p>Madurai, Tamilnadu, India.</p>
                        </div>
                    </div>
                    <div className='footer__phone'>
                        <h4><FaPhone size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}/>
                        +(91) 8248413691</h4>
                    </div>
                    <div className='footer__mail'>
                        <h4><FaMailBulk sizea={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }}/>
                        nagasuryacse16@gmail.com</h4>
                    </div>
                </div>
                <div className='footer__right'>
                        <h4>About</h4>
                        <p>This is me Nagasurya Jeysankar. Building new react projects and updating it to my portfolio.</p>
                        <div className='footer__social'>
                        
                            <a href='https://www.instagram.com/__surya__11/' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                            }}/>
                            </a>
                            <a href='https://www.youtube.com/channel/UCMZKRaNqYK9vwKQKwTM2AiQ' target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} style={{
                                color: "#fff",
                                marginRight: "1rem"
                            }}/>
                            </a>
                            <a href='https://www.linkedin.com/in/nagasurya-jeysankar-267383146/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                            }}/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;