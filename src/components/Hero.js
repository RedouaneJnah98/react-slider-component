import React, { useState } from 'react';
import data from '../data/data';
import Slider from './Slider';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const Hero = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="slider">
      <div className="pattern-slider">
        <div className="pattern-container">
          <img
            src="/images/pattern-quotes.svg"
            className="pattern-quotes"
            alt=""
          />
          <img src="/images/pattern-bg.svg" className="svg-pattern" alt="" />
        </div>
      </div>
      <article className="center-slider">
        {people.map((item, index) => {
          return <Slider key={index} {...item} />;
        })}
        {/* <div className="btn-container">
          <button className="prev btn">
            <BiChevronLeft className="icon" />
          </button>
          <button className="next btn">
            <BiChevronRight className="icon" />
          </button>
        </div> */}
      </article>
    </section>
  );
};

export default Hero;
