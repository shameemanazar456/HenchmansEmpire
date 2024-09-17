import React from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import MissionVision from '../components/MissionVision'

function Aboutus() {
  return (
   <>
   <NavBar/>
      <div className='d-flex align-items-center justify-content-center flex-column'> 
      <h1 className=' aboutusHeading m-5 '>About Us</h1>
      <About/>
      <MissionVision/>
      
        
      </div>
   </>
  
  )
}

export default Aboutus
