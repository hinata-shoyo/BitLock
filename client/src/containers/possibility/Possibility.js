import React from 'react';
import possibilityImage from '../../assets/jpg.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='bit__possibility section__padding' id="possibility">
      <div className='bit__possibility-image'>
        <img src={possibilityImage} alt="possibilityimage" />
      </div>
      <div className='bit__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Digital lockers provide users with a convenient and centralized way to access, organize, and share their digital information securely over the internet. Many governments and organizations offer digital locker services to their citizens or members as a way to facilitate easy access to important documents and promote digital efficiency and security.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility