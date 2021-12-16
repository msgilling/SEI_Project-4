
import React, { useState } from 'react'
import axios from 'axios'
import { Form, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// import TEXTLOGO1 from '../assets/TEXTLOGO1.PNG'


const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }


  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      console.log('RESPONSE ->', data)
      setItemToLocalStorage(data.token)
      history.push('/affirmations/')
    } catch (err) {
      setError(true)
    }
  }
  console.log('errors', error)


  return (
    <section className="login-form-field is-flex is-justify-content-center">
      <Card className="login-form ">
        <Card.Header className="welcome-title" id="login-welcome">Welcome back!</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="is-flex is-flex-direction-column">
            
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className={`input ${error ? 'is-danger' : ''}`}
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className={`input ${error ? 'is-danger' : ''}`}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange} />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              value="submit"
            >
              Log in!
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>

  )
}

export default Login