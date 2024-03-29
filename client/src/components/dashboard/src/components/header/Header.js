import React from 'react'
import './header.css'
import dp from '../../assets/dp.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Popup from '../popup/Popup'

const Header = (props) => {

  const [name, setName] = useState('')
  const [file, setFile] = useState(dp)
  const [isVisible, setIsVisible] = useState(false)
  const getName = async () => {
    const response = await axios.get("https://bit-lock.vercel.app/doc" , {headers: {"Authorization" : `bearer ${window.localStorage.getItem('token')}`}})
    // console.log(response.data)
    const name = `${response.data.firstName} ${response.data.lastName}`
    setName(name)
    setFile(response.data.profilePicture)
  }

  useEffect(() => {
    setIsVisible(false)
    getName()
    console.log(file)
  }, [])

  const handlePopup = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='bit_dash' id='home'>
      <h1>DASHBOARD</h1>
      <div className='bit_dash_box'>
        <div className='bit_dash_image'>
          <img src={`https://bit-lock.vercel.app/${file}`} alt="dp"/>
        </div>
        <div className='bit_dash_name'>
          <h3>{`Welcome, ${name}`}</h3>
        </div>
        <div className='bit_dash_btn'>
          {/* <Eyes/> */}
          <button onClick={()=> handlePopup()}>UPDATE</button>
          {isVisible && <Popup />}
        </div>
      </div>
    </div>
  )
}

export default Header