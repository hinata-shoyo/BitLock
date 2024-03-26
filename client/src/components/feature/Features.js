import React from 'react';
import './features.css';

const Feature = ({ title, text }) => (
  <div className="bit__features-container__feature">
    <div className="bit__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="bit__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;