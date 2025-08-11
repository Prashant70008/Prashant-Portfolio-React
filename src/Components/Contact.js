import React from 'react';
import './Contact.css';
import underline from '../Assets/underline.svg';
import message_icon from '../Assets/message_icon.svg';
import call_icon from '../Assets/call_icon.svg';
import map_icon from '../Assets/map_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bb9d3ce6-2992-443d-8f54-b219e32be0c9");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      event.target.reset();
      alert("Message sent successfully!");
    } else {
      console.log("Error", data);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={underline}/>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently avaliable to take on new project. so feel free to send me a message about anything that you want meto work. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src= {message_icon}/> <p>prashant.ag2007@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src= {call_icon}/> <p>+91 1234567890</p>
                </div>
                <div className="contact-detail">
                    <img src= {map_icon}/> <p>Uttar Pradesh, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name='message' rows="7" placeholder='Enter your message'></textarea>
            <button type="submit"className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
