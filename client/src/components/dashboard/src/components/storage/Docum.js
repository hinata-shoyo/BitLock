import './storage.css'
import React from 'react'


const Docum = (props) => {
    return (
            <div className='bit_storage_smallbox1'>
              <a href={`${props.link}`}>
              <img src={document} alt='folder'/>
              <h3>{props.title}</h3>
              <div className='bit_storage_smallbox1_bottom1'>
                <h5>Delete File</h5>
                { <h6>120 kb</h6> }
              </div>
              </a>
            </div>
            // <div className='bit_storage_smallbox2'>
            //   <a href="#home">
            //   <img src={document} alt="document"/>
            //   <h3>DOCUMENT</h3>
            //   <div className='bit_storage_smallbox2_bottom2'>
            //     <h5>Delete File</h5>
            //     <h6>1 MB</h6>
            //   </div>
            //   </a>
            // </div>
            // <div className='bit_storage_smallbox3'>
            //   <a href="#home">
            //   <img src={document} alt='pdf'/>
            //   <h3>DOCUMENT</h3>
            //   <div className='bit_storage_smallbox1_bottom3'>
            //     <h5>Delete File</h5>
            //     <h6>56 kB</h6>
            //   </div>
              </a>
            </div>
    )
}

export default Docum
