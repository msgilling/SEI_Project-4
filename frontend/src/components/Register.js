import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import { ImageUploadField } from '../ImageUploadField'
import { useHistory } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'
import TEXTLOGO1 from '../assets/TEXTLOGO1.PNG'


const Register = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    about_me: '',
    pronouns: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    about_me: '',
    pronouns: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })
  
  useEffect(() => {
    userIsAuthenticated() ? history.push('/affirmations/') : ''
  }, [history])


  const handleChange = (event) => {
    console.log('event.target.name', event.target.name)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  // console.log('FORMDATA ON STATE ->', formData)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('its working')
    try {
      const { data } = await axios.post('/api/auth/register/', formData)
      console.log('data', data)
      history.push('/login/')
    } catch (err) {
      setErrors(err.response.data)
      console.log('err.response', err.response)
    }

  }
  console.log('ERRORS', errors)

  

  const handleImageUrl = (url) => {
    setFormData({ ...formData, profile_image: url })

  }

  return (
    <section className="register-form-field is-flex is-justify-content-center">
      <Card className="register-form">
        <Card.Header className="welcome-title">Welcome to<img src={TEXTLOGO1} alt="text-logo" id="text-logo" width="57%"/></Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="is-flex is-flex-direction-column">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Enter Username"

                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange} />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                type="text"
                name="about_me"
                placeholder="Enter About Me"
                value={formData.about_me}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPronouns">
              <Form.Label>Pronouns</Form.Label>
              <Form.Control
                type="text"
                name="pronouns"
                placeholder="Enter Pronouns"
                value={formData.pronouns}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <ImageUploadField
                // className={`input ${errors.profile_image ? 'is-danger' : ''}`}
                value={formData.profile_image}
                name="profile_image"
                type="profile_image"
                handleImageUrl={handleImageUrl}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // className={`input ${errors.password ? 'is-danger' : ''}`}
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPasswordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                // className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
                type="password"
                name="password_confirmation"
                placeholder="Enter Password Confirmation"
                value={formData.password_confirmation}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I have read the Terms and Conditions" />
            </Form.Group>
            <Button
              className="is-flex is-justify-content-center"
              variant="dark"
              type="submit"
              value="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>

  )
}

export default Register