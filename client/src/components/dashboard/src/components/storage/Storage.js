import React from 'react'
import './storage.css'
import document from '../../assets/document.svg'
// import folder from '../../assets/folder.svg'
// import pdf from '../../assets/pdf.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Docum from './Docum'
import Popup2 from '../popup/Popup2'


const Storage = () => {
  const [isVisible, setIsVisible] = useState(false);
const [docs, setDocs] = useState([])
const getArray = async () => {
  const response = await axios.get("https://bit-lock.vercel.app/doc", {
    headers:{
      Authorization: `bearer ${window.localStorage.getItem('token')}`
    }
  })
  
// this.setDocs({ 
//   arrayvar: this.Docs.arrayvar.concat(response.data.documents)
// })


  setDocs(response.data.documents)  
  console.log(docs)
  console.log(response.data.documents)
}

useEffect(() => {
  setIsVisible(false)
  getArray()
}, [])

const handlePopup = () => {
  setIsVisible(!isVisible);
};

  return(
    
    <div className='bit_storage' id='storage'>
          <div className='bit_storage_bigbox'>
            <h2>STORAGE AREA</h2>
            <div className="bit_dash_btn">
          <button onClick={handlePopup}>ADD</button>
          {isVisible && <Popup2 />}
        </div>
            {docs.map((docs) => {
        <Docum 
        title={docs.title}
        id={docs._id}
        link={docs.link} />
      })}
          </div>
        </div>
      
  )
}

export default Storage