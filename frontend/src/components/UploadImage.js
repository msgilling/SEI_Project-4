import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Card, Form, Button } from 'react-bootstrap'
import { ImageUploadField } from '../ImageUploadField'
import { getTokenFromLocalStorage } from './helpers/auth'


const UploadImage = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    image: '',
    caption: '',
  })

  const [errors, setErrors] = useState(false)


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url })
  }
  console.log('formdata', formData)
  console.log('token', getTokenFromLocalStorage())

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('formData->', formData)
      const { data } = await axios.post('/api/images/',
        formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      console.log('data.id', data.id)
      history.push('/images/')
    } catch (err) {
      setErrors(err.response.data)
    }
  }
  console.log('ERRORS', errors)
  return (
    <section className="login-form-field is-flex is-justify-content-center">
      <Card className="login-form ">
        <Card.Header className="welcome-title">Image Upload</Card.Header>
        <Card.Body>
          <Form className="is-flex is-flex-direction-column" onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Your Image</Form.Label>
              <ImageUploadField
                value={formData.image}
                name="image"
                type="file"
                handleImageUrl={handleImageUrl}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCaption">
              <Form.Label>Your Caption</Form.Label>
              <Form.Control
                type="caption"
                name="caption"
                placeholder="Enter Caption"
                value={formData.caption}
                onChange={handleChange}
              />
            </Form.Group>
            {formData.image && formData.caption ?

              <div className="is-flex is-justify-content-center">
                <Button
                  variant="dark"
                  type="submit"
                  value="submit"
                >
                  Upload Image
                </Button>
              </div>

              :
              <p className="is-flex is-justify-content-center"><small>Please select an image and add a caption 📸</small></p>
            }

          </Form>
        </Card.Body>
      </Card>
    </section>



  )
}

export default UploadImage