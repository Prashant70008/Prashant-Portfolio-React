import React from 'react';
import './About.css';
import underline from '../Assets/underline.svg';
import about from '../Assets/about.jpg';

const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={underline} />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={about}/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>My name is Prashant kumar. I'm commpleting my Graduation in Bachelor of computer Application. I'm working with many Programming language like- C, C++, Java, Python. Also I'm working with differnt technologies like- Desktop Application, Web Application and Android Application. And successfully complete many Projects... Library Management system, Application, Portfoilo Website.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS <hr style={{width: "80%"}} /></p>
                    <p>JavaScript <hr style={{width: "50%"}} /></p>
                    <p>React Js <hr style={{width: "70%"}} /></p>
                    <p>Next Js <hr style={{width: "30%"}} /></p>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About;
