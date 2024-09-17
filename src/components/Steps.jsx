import React from 'react'
import { Card } from 'react-bootstrap'

function Steps() {
  return (
    <section className='d-flex align-items-center justify-content-center m-5 flex-column'>
        <h3>How It Works</h3>
    <div className=' row w-100 d-flex align-items-center justify-content-center m-5'>
         <Card className='stepsCard  col-md-3 m-5 '>
          <Card.Body>Get to me..</Card.Body>
        </Card>
        <Card className='stepsCard  col-md-3 m-5'>
          <Card.Body>Write to me</Card.Body>
        </Card>
        <Card className='stepsCard col-md-3 m-5 '>
          <Card.Body>Get it Solved</Card.Body>
        </Card>
    </div>
      
    </section>
  )
}

export default Steps
