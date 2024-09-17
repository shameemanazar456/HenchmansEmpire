import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Steps from '../components/Steps'
import ChatBoat from '../components/ChatBoat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

function Home() {
  
  return (
    <>
    <NavBar/>
    <Banner/>
    <Steps/>
      <ChatBoat/>
    
    </>
  )
}

export default Home
