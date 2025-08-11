import React from 'react';
import './Hero.css';
import profile from '../Assets/profile.png';

const Hero = () => {
  return (
    <div id='hero' className="hero">
        <img src={profile} alt="" />
        <h1><span>I'm Prashant Rajput,</span> Frontend Developer Based In India</h1>
        <p>I'm a frontend developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills.</p>
            <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a></div>
            <div className="hero-resume">My Resume</div>

        </div>
      
    </div>
  )
}

export default Hero;
