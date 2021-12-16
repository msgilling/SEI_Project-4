import React, { useState } from 'react'
import axios from 'axios'
import { Form, Card, Button } from 'react-bootstrap'
import { getTokenFromLocalStorage } from './helpers/auth'
import { useHistory } from 'react-router-dom'


const AddAndDeleteComment = ({ ImageId, setAddAComment, setComments }) => {
  const history = useHistory()
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    image: ImageId, 
    text: '',
  })
  console.log('imageid', ImageId)

  const handleChange = (event) => {
    console.log('formData', formData)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/comments/', formData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      history.push(`/images/${ImageId}/`)
      const { data } = await axios.get(`/api/images/${ImageId}/`)
      setAddAComment(false)
      setComments(data.comment_set)
      console.log('data.comment_set', data.comment_set)
    } catch (err) {
      setError(true)
    }
  }
  console.log('errors', error)
  return (

    <section className="comment-form-field is-flex is-justify-content-center">
      <Card className="comment-form ">
        <Card.Header className="comment-title">Leave a Comment</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="is-flex is-flex-direction-column">
            
            <Form.Group className="mb-3" controlId="formGroupComment">
              <Form.Control
                type="comment"
                // className={`input ${error ? 'is-danger' : ''}`}
                name="text"
                placeholder="Type comment here"
                value={formData.text}
                onChange={handleChange} />
            </Form.Group>
            

            <Button
              variant="dark"
              type="submit"
              value="submit"
            >
              Post
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  )
}

export default AddAndDeleteComment