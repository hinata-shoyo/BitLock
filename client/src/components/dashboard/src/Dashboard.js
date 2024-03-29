import React from 'react'
import {Details, Header, Navbar, Storage, Footer} from './components'
import './dashboard.css'
import { useEffect } from 'react'



const Dashboard = (props) => {

  const check =() => {
    if(!props){
      window.location.href = "/signin"
    }
  }

  return (
    <div className='App'>
        <div className='gradient__bg'>
          {check}
            <Navbar token={props.token}/>
            <Header token={props.token}/>
        </div>
        {/* <Details/> */}
        <Storage/>
        <Footer/>
    </div>
  )
}

export default Dashboard