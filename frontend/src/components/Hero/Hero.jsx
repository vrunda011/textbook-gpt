import React from 'react';
import './Hero.css';
import hero_right_1 from '../../assets/Images/left1.jpeg';
import hero_right_2 from '../../assets/Images/left2.jpeg';
import hero_right_3 from '../../assets/Images/left3.jpeg';
import hero_right_4 from '../../assets/Images/left4.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        
        <p className='hero-left-h1'>Your 24/7</p>
        <p className='hero-left-h1'>Learning</p>
        <p className='hero-left-h1'>Helper</p>
        <div className='hero-left-second'>
          <p className='hero-left-h3'>Get your doubts solved anytime, anywhere.</p>
          <p className='hero-left-h3'>Completely tailored to your syllabus.</p>
        </div>
        <div className='hero-left-btn'>
          <Link to="/standard" className='login-link'><div>Get Started</div></Link>
        </div>
      </div>
      <div className='hero-right'>
        <div className='hero-right-img'>
          <img src={hero_right_1} alt="" className='hero-right-img-1'/>
          <img src={hero_right_2} alt="" className='hero-right-img-2'/>
          <img src={hero_right_3} alt="" className='hero-right-img-3'/>
          <img src={hero_right_4} alt="" className='hero-right-img-4'/>
        </div>
        <div className='hero-right-bg-1'></div>
        <div className='hero-right-bg-2'></div>
      </div>
    </div>
  );
};

export default Hero;
