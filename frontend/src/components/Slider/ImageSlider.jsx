import React from 'react';
import Slider from 'react-slick';
import {Link, useNavigate} from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './ImageSlider.css';
import s1 from "../../assets/Images/s1.jpeg"
import s2 from "../../assets/Images/s2.jpeg"
import s3 from "../../assets/Images/s3.jpeg"
import s4 from "../../assets/Images/s4.jpeg"
import s5 from "../../assets/Images/s5.jpeg"
import s6 from "../../assets/Images/s6.jpeg"
import s7 from "../../assets/Images/s7.jpeg"
import s8 from "../../assets/Images/s8.jpeg"
import s9 from "../../assets/Images/s9.jpeg"
import s10 from "../../assets/Images/s10.jpeg"
import s11 from "../../assets/Images/s11.jpeg"
import s12 from "../../assets/Images/s12.jpeg"


const ImageSlider = () => {
  const navigate = useNavigate();
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    
  const data = [
    {
      class: 1,
      img: s1,
    },
    {
      class: 2,
      img: s2,
    },
    {
      class: 3,
      img: s3,
    },
    {
      class: 4,
      img: s4,
    },
    {
        class: 5,
        img: s5,
      },
      {
        class: 6,
        img: s6,
      },
      {
        class: 7,
        img: s7,
      },
      {
        class: 8,
        img: s8,
      },
      {
        class: 9,
        img: s9,
      },
      {
        class: 10,
        img: s10,
      },
      {
        class: 11,
        img: s11,
      },
      {
        class: 12,
        img: s12,
      }
  ];
  const toComponent=(d)=>{
    navigate('/chat',{state:{id:d}})
  }
  return (
    <div className="slider-container">
        <div className='slider-container-stander'>
            <p>Standard</p>
        </div>

      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.class} className="slider-item" onClick={()=>toComponent(d.class)}>
            <div className="image-container">
              <img src={d.img} alt={`Image ${d.class}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
