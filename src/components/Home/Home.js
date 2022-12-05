import './Home.css';
import pixels from './pixels.jpg';
import React from 'react';

export function Home() {
  return (
    <div className='Home'>
      <img src={pixels} alt='pixels' className='HeroImage' />
      <section className='HomeSection'>
        <h2 className='h2'>Hello!</h2>
        <p>
          I'm <span className='HomeSpan'>Idan</span>, a full stack developer
          based in Ramat-Gan. Looking for my next{' '}
          <span className='HomeSpan'>challenge</span>
        </p>
      </section>
    </div>
  );
}
