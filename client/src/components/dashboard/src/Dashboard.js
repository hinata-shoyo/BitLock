import React from 'react'
import {Details, Header, Navbar, Storage, Footer} from './components'
import './dashboard.css'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const Dashboard = (props) => {

  const navigate = useNavigate()
  const location = useLocation() 
  // console.log(location.state)
  console.log("hi")
  console.log(props)
  useEffect(()=> {
    if(props.token == null){
      navigate("/signin")
      }
  }, [])

  return (
    <div className='App'>
        <div className='gradient__bg'>
          {/* {check} */}
            <Navbar />
            <Header/>
        </div>
        {/* <Details/> */}
        <Storage/>
        <Footer/>
    </div>
  )
}

export default Dashboard