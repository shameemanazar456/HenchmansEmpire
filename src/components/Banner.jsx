import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Welcome to HenchMan's Empire","I'm HenchMan I'm here to Help You." ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className='banner m-md-5' id='home' >
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
           <h1><span className='wrap'>{text}</span></h1>
                <p>You can tell  Your Grievances to me. I will solve all your Grievances. My vision is to conquire all troubles around us and to make an empire with full of happiness. Let's Make it together by addressing your grievances here. </p> 
                <Link to={'/ComplaintRegistration'} className='connect btn btn-danger mb-3'  >Let’s Connect </Link>
                </Col>
                <Col xs={12} md={6} xl={5} className='bannerImage'>
                <img src="https://imgcdn.stablediffusionweb.com/2024/5/17/81362e7b-382b-43a5-b49a-1c55763e2997.jpg" alt="Banner Image" />
               </Col> 
            </Row>
        </Container>
      
    </section>
  )
}

export default Banner
