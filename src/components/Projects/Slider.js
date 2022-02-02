import React, { useState } from 'react';
import { SliderData } from './slideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
        
            {index === current && (
              <div className='image1' style={{backgroundImage:`url(${slide.image})`}}>        
               <a className='link-project' href={slide.netlify}><i class="fas fa-link"></i></a>  
               <a className='link-project' href={slide.github}><i class="fab fa-github fa-2x"></i></a>
              </div>
              )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
