import React from 'react';

const Slider = ({ name, job, quote, image }) => {
  return (
    <main className="slider-person">
      <div className="info">
        <p className="quote">{quote}</p>
        <div className="perso-info">
          <h3 className="name">{name}</h3>
          <h3 className="job">{job}</h3>
        </div>
      </div>
      <div>
        <img src={image} alt={name} className="person-img" />
      </div>
    </main>
  );
};

export default Slider;
