import React from 'react';
import './Hero.css';
import hero_right_1 from '../../assets/Images/img7.png';
import hero_right_2 from '../../assets/Images/img4.png';
import hero_right_3 from '../../assets/Images/img8.png';
import hero_right_4 from '../../assets/Images/img6.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <p className='hero-left-h1'>Too Shy to</p>
        <p className='hero-left-h1'>Ask in Class?</p>
        <p className='hero-left-h2'>Let Textbook GPT Be Your Guide!</p>
        <div className='hero-left-second'>
          <p className='hero-left-h3'>Personalised AI Tutor Tailored For Indian Syllabus.</p>
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