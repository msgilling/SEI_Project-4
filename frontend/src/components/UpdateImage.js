/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { ImageUploadField } from '../ImageUploadField'
import { useHistory } from 'react-router'
// import { userIsAuthenticated } from './helpers/auth'
import axios from 'axios'
import { useParams } from 'react-router'
import { getTokenFromLocalStorage } from './helpers/auth'


const UpdateImage = () => {
  const history = useHistory()
  const [newImage, setNewImage] = useState({
    caption: '',
  })
  const { id } = useParams()
  const [errors, setErrors] = useState({
    caption: '',
  })
  console.log('EDIT ID PARAMS', id)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/images/${id}/`)
        console.log('DATA', data)
        setNewImage(data)
      } catch (err) {
        console.log(err)
        setErrors(err.response.data)
      }
      
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  console.log('IMAGE EDIT FORM', newImage)


  const handleChange = (event) => {
    console.log('event.target.name', event.target.name)
    const newImageData = { ...newImage, [event.target.name]: event.target.value }
    setNewImage(newImageData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/images/${id}/`,
        newImage,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/images/')
    } catch (err) {
      console.log('err', err)
      // setErrors(err.response.data)
    }
  }
  console.log('errors', errors)


  return (
    <section className="login-form-field is-flex is-justify-content-center">
      <Card className="login-form ">
        <Card.Header className="welcome-title">Edit Your Caption</Card.Header>
        <Card.Body>
          <Form className="is-flex is-flex-direction-column" onSubmit={handleSubmit}>

            {/* <Form.Group>
              <Form.Label>Your Image</Form.Label>
              <ImageUploadField
                value={newImage.image_upload}
                name="image"
                type="file"
                
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formGroupCaption">
              <Form.Label>Your Caption</Form.Label>
              <Form.Control
                type="caption"
                name="caption"
                placeholder="Enter Caption"
                value={newImage.caption}
                onChange={handleChange}
              />
            </Form.Group>
            {newImage.caption ?

              <div className="is-flex is-justify-content-center">
                <Button
                  variant="dark"
                  type="submit"
                  value="submit"
                >
                  Upload Changes
                </Button>
              </div>

              :
              <p className="is-flex is-justify-content-center"><small>Please update your caption 🖊</small></p>
            }

          </Form>
        </Card.Body>
      </Card>
    </section>

  )
}
export default UpdateImage