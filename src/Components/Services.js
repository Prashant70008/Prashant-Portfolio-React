import React from 'react'
import './Services.css';
import underline from '../Assets/underline.svg';
import arrow from '../Assets/arrow.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={underline}/>
        </div>
        <div className="services-container">
            <div className="services-format"><h3>01</h3>
            <h2>Web design</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
            <div className="services-format"><h3>02</h3>
            <h2>Graphics design</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
            <div className="services-format"><h3>03</h3>
            <h2>Social media</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
            <div className="services-format"><h3>04</h3>
            <h2>App design</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
            <div className="services-format"><h3>06</h3>
            <h2>Digital marketing</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
            <div className="services-format"><h3>06</h3>
            <h2>Content writing</h2>
            <p>Web development is the process of building, programming...</p>
            <div class="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
