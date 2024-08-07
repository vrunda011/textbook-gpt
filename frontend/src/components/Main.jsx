import './Main.css';
import React, { useEffect, useState } from 'react';

function Main({sendDataToParent }) {
  const [standards, setStandards] = useState([]);
  useEffect(() => {
    const standardsArray = [];
    for (let i = 1; i <= 12; i++) {
      const imgSrc = `/images/standard${i}.jpg`;
      standardsArray.push({
        id: i,
        imgSrc,
        label: `Standard ${i}`,
      });
    }
    setStandards(standardsArray);
  }, []);
  return (
    <div className='container home-container'>
      <div className="home-image">
        <img src='/images/homepage-attractive-image.jpg' alt="main image" />
      </div>
      <div className="home-text">
        <h1>Welcome to Textbook GPT</h1>
        <p>Your personalized AI tutor for seamless learning experiences.</p>
        <div className="standards-grid">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="standard-box"
              onClick={() => sendDataToParent(standard.id)}
            >
              <img src={standard.imgSrc} alt={standard.label} />
              <span>{standard.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Main;