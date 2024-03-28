import React from 'react'
import './storage.css'
import document from '../../assets/document.svg'
// import folder from '../../assets/folder.svg'
// import pdf from '../../assets/pdf.svg'

const Storage = () => {
  return (
    <div className='bit_storage' id='storage'>
      <div className='bit_storage_bigbox'>
        <h2>STORAGE AREA</h2>
        <div className='bit_storage_smallbox1'>
          <a href="#home">
          <img src={document} alt='folder'/>
          <h3>DOCUMENT</h3>
          <div className='bit_storage_smallbox1_bottom1'>
            <h5>Delete File</h5>
            <h6>120 MB</h6>
          </div>
          </a>
        </div>
        <div className='bit_storage_smallbox2'>
          <a href="#home">
          <img src={document} alt="document"/>
          <h3>DOCUMENT</h3>
          <div className='bit_storage_smallbox2_bottom2'>
            <h5>Delete File</h5>
            <h6>120 MB</h6>
          </div>
          </a>
        </div>
        <div className='bit_storage_smallbox3'>
          <a href="#home">
          <img src={document} alt='pdf'/>
          <h3>DOCUMENT</h3>
          <div className='bit_storage_smallbox1_bottom3'>
            <h5>Delete File</h5>
            <h6>120 MB</h6>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Storage