import React from 'react'
import {Details, Header, Navbar, Storage, Footer} from './components'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
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