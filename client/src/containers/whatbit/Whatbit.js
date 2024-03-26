import React from 'react'
import './whatbit.css'
import Features from '../../components/feature/Features'

const Whatbit = () => {
  return (
    <div className='bit__whatbit section__margin' id='wbit'>
      <div className='bit__whatbit-feature'>
        <Features title="What is BitLock" text="A digital locker refers to a secure online storage space where individuals can store and manage their digital documents and files. It is typically used to store important documents such as identification cards, certificates, academic records, financial documents, and other personal or professional files. Digital lockers provide users with a convenient and centralized way to access, organize, and share their digital information securely over the internet."/>
      </div>
      <div className='bit__whatbit-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='bit__whatbit-container'>
        <Features title="Security" text="Your data is protected with advanced encryption protocols and strict access controls, ensuring confidentiality and privacy. " />
        <Features title="Conveniences" text="Say goodbye to paper-based document storage and enjoy the convenience of digital access and management." />
        <Features title="Efficiency" text="Save time and effort with streamlined document organization and retrieval, enhancing productivity for students and faculty alike." />
      </div>
    </div>
  )
}

export default Whatbit