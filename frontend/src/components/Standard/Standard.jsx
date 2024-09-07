import './Standard.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Standard() {
  const [standards, setStandards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const standardsArray = [];
    for (let i = 1; i <= 12; i++) {
      const imgSrc = `/images/standard${i}.gif`;
      standardsArray.push({
        id: i,
        imgSrc,
        label: `Standard ${i}`,
      });
    }
    setStandards(standardsArray);
  }, []);

  const toComponent = (id) => {
    navigate('/chat', { state: { id } });
  };

  return (
    <div className='container home-container'>
      <div className="home-text">
        <h1>Choose Your Standard!</h1>
        <div className="standards-grid">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="standard-box"
              onClick={() => toComponent(standard.id)}>
              <img src={standard.imgSrc} alt={standard.label} />
              <span>{standard.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Standard;
