import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div className='bit_details' id='details'>
      <div className='bit_details_box'>
      <h2>ACADEMIC DETAILS</h2>
      <div className='bit_details_name1'>
          <div className='bit_details_name1_box1'>
            <h3>Bachelors of technology(Computer Science and Engineering )</h3>
          </div>
          <div className='bit_details_name1_box2'>
            <h3>Session - 2023-2027</h3>
          </div>
        </div>
        <div className='bit_details_name2'>
          <div className='bit_details_name2_box1'>
            <h3>Inderprastha Engineering College , Ghaziabad</h3>
          </div>
          <div className='bit_details_name2_box2'>
            <h3>Semester - 1</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details