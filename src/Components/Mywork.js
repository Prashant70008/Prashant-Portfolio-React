import React from 'react';
import './Mywork.css';
import underline from '../Assets/underline.svg';
import arrow from '../Assets/arrow.svg';
import portfolio_1 from '../Assets/portfolio_1.svg';
import portfolio_2 from '../Assets/portfolio_2.svg';
import portfolio_3 from '../Assets/portfolio_3.svg';
import portfolio_4 from '../Assets/portfolio_4.svg';
import portfolio_5 from '../Assets/portfolio_5.svg';
import portfolio_6 from '../Assets/portfolio_6.svg';

const Mywork =  () => {
  return (
    <div>
      <div id='mywork' className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={underline}/>
        </div>
        <div className="mywork-container">
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_1} /> </a>
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_2} /></a>
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_3} /></a>
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_4} /></a>
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_5} /></a>
            <a href='https://prashant-rajput.netlify.app/' target="_blank"><img src={portfolio_6} /></a>
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src= {arrow} />
        </div>
      </div>
    </div>
  )
}

export default Mywork;
