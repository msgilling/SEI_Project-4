import React from 'react'
import { Card, Button } from 'react-bootstrap'
import NIGHTDAZEAPP from '../assets/NightNDaze.png'
import TEXTLOGO1 from '../assets/TEXTLOGO1.PNG'



const Home = () => {

  

  return (
    <section className="home-section is-flex is-justify-content-center">
    
      <Card className="welcome-card is-flex">

        <Card.Header className="welcome-title">Welcome to <img src={TEXTLOGO1} alt="text-logo" id="text-logo" width="57%"/>
          
        </Card.Header>
        <Card.Body className="is-flex is-flex-direction-column">
          <img src={NIGHTDAZEAPP} alt="logo" id="iphoneapp-card" width="300"/>
          {/* <Card.Title>The unique app where you can share you skies</Card.Title> */}
          <Card.Text className="home-text">
            Weather together with unique social media app!
          </Card.Text>
          <div className="is-flex is-justify-content-space-evenly">
            <Button variant="dark" id="login-home-btn" href="login">Log in</Button>
            <Button variant="dark" id="register-home-btn" href="register">Register</Button>
          </div>
          {/* <hr/> */}
          <div className="home-footers">
            Made by &nbsp;<a href="https://github.com/msgilling" id="githublink">msgilling</a>
          </div>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Home