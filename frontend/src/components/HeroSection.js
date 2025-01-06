import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Adam Taylor</h1>
        <p>Software Developer</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Contact</Button>
        </div>
    </div>
  )
}

export default HeroSection