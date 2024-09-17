import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <section className='about m-5' id='about' >
    <Container>
        <Row className='w-100 m-5 px-5'>
            <Col xs={12} md={6} xl={7}>
            <p>Welcome to <h4>Henchman's Empire. </h4>Henchman's Empire is an imaginary World where there is a no problems to no one. Each one in Henchman's empire lives Peacefully. Henchman, which means a helper, who can  solve all your grievances.  You can tell  Your Grievances to HenchMan. I will solve all your Grievances. My vision is to conquire all troubles around us and to make an empire with full of happiness. Let's Make it together by addressing your grievances here. </p> 
          </Col>
            <Col xs={12} md={6} xl={5} className='aboutimage d-flex align-items-center justify-content-center '>
            <img src="https://imgcdn.stablediffusionweb.com/2024/5/17/81362e7b-382b-43a5-b49a-1c55763e2997.jpg" height='250px' alt="About Image" className='' />
           </Col> 
        </Row>
    </Container>
  
</section>
  )
}

export default About
