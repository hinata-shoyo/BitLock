import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='bit__footer section__padding' id='footer'>
      <div className='bit__footer-heading'>
        <h1 className='gradient__text'>Unlock The Potential Of Digital Organisation And Security With BitLock !</h1>
      </div>
      <div className='bit__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='bit__footer-links'>
        <div className='bit__footer-links_logo'>
          <img src={logo} alt="logo"/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='bit__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Content</p>
        </div>
        <div className='bit__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='bit__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>123456789</p>
          <p>inof@xyz.com</p>
        </div>
      </div>
      <div className='bit__footer-copyright'>
        <p>© 2024 BitLock. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer