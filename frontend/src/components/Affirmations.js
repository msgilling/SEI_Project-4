/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import LOGO from '../assets/COLOUR_LOGO_TEXT.PNG'
import axios from 'axios'
import { getUserId } from './helpers/auth'


const Affirmations = () => {
  const [affirmations, setAffirmations] = useState([])
  // const [hasError, setHasErrors] = useState(false)
  const [random, setRandom] = useState(null)
  const [username, setUsername] = useState([])
  const id = getUserId()
  console.log('get user id', id)
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/affirmations/')
        const randomAffirmation = Math.floor(Math.random() * 11)
        // console.log('affirmations ->', data[randomAffirmation].text)
        setAffirmations(data)
        setRandom(data[randomAffirmation].text)
      } catch (err) {
        console.log(err)
        // setHasErrors(hasError)
      }
    }
    getData()
  }, [])


  return (
    <section className="section is-flex is-justify-content-center">
      <Card style={{ width: '19rem' }} id="image-card-aff">
        <Card.Img src={LOGO} alt="logo" id="aff-card-logo"/> 
        <Card.Footer className="is-flex is-flex-direction-column" id="footer-aff">
          <Card.Title className="card-title">Welcome back!</Card.Title>
          <Card.Text className="image-footer">{random}</Card.Text>
          <Button variant="dark" id="login-home-btn" href="/images/">Enter</Button>
        </Card.Footer>
      </Card>
    </section>

  )
}

export default Affirmations