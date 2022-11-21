import React from 'react';
import HeroLeft from './HereLeft';
import HeroAside from './HeroAside';

const HeroSection = () => {
  return (
    <div className='flex justify-between'>
      <HeroLeft />
      <HeroAside />
    </div>
  );
};

export default HeroSection;
