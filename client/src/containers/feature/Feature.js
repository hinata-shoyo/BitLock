import React from 'react';
import Feature from '../../components/feature/Features';
import './feature.css';

const featuresData = [
  {
    title: 'Secure Storage',
    text: 'Safely store all your important documents and credentials in one place.',
  },
  {
    title: 'Easy Access',
    text: 'Quickly access your stores files anytime, anywhere with just a few clicks.',
  },
  {
    title: 'Organised Categories',
    text: 'Effortlessly categorize and manage your documents for easy retrieval.',
  },
  {
    title: 'Collaboration Tools',
    text: 'Share documents securely and eassily with colleagues and classmates for efficinet collaboration.',
  },
];

const Features = () => (
  <div className="bit__features section__padding" id="features">
    <div className="bit__features-heading">
      <h1 className="gradient__text">Experience The Convenience And Security Of Our Digital Locker For All Your Document Storage Needs.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="bit__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
