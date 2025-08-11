import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import footer_email_image from '../Assets/footer_email_image.svg';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} />
                <p>I am a frontend developer from, India with 1 years of experience in companies like ........</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={footer_email_image} />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Prashant Rajput. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>  
    </div>
  )
}

export default Footer;
