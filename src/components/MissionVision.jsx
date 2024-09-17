import React from 'react'
import { Col, Row } from 'react-bootstrap'

function MissionVision() {
  return (
    <>
            <h3 className='aboutusHeading mt-5'>Mission And Vision</h3>

    <Row className=' w-75 m-5 p-5'>
        <Col xs={12} md={3} >
        <div className='outerdiv ms-5 d-flex align-items-center justify-content-center '>
            <h4 className='mission'>Mission</h4>
            </div> 
        </Col>
        <Col xs={12} md={9} >
        <div className='innerDiv ms-5 d-flex align-items-center justify-content-center '>
            <h6>My Mission is to solve all your grivances by using my super power and to make a world full of happiness, Peace and Prosperous.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae repellendus sunt, consequatur nobis</h6>
            </div> 
        </Col>
    </Row>
    <Row className=' w-75 m-5 p-5'>
        
        <Col xs={12} md={9} >
        <div className='innerDiv ms-5 d-flex align-items-center justify-content-center '>
            <h6>My vision is to build a world without problems. A peacefull and Prosperous surronding is my Vision. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae repellendus sunt, consequatur nobis </h6>
            </div> 
        </Col>
        <Col xs={12} md={3} >
        <div className='outerdiv ms-5 d-flex align-items-center justify-content-center '>
            <h4 className='mission'>Vision</h4>
            </div> 
        </Col>
    </Row>

      
    </>
  )
}

export default MissionVision
