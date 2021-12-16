/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import AddAndDeleteComment from './AddAndDeleteComment'
import UpdateImage from './UpdateImage'
import { getTokenFromLocalStorage, getPayload } from './helpers/auth'
import { userIsAuthenticated } from './helpers/auth'

const ImageShow = () => {
  const [image, setImage] = useState([])
  const [comments, setComments] = useState([])
  const [owner, setOwner] = useState([])
  const [addAComment, setAddAComment] = useState(false)
  const history = useHistory()
  const { id } = useParams()
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/images/${id}`)
        setImage(data)
        setComments(data.comment_set)
        setOwner(data.owner)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/${id}`)
      console.log('response', response)
    }
    getData()
  })


  const userIsOwner = (currentUserId) => {
    const payload = getPayload()
    if (!payload) return false
    return currentUserId === payload.sub
  }

  const deleteComment = async(commentId, comment) => {
    try {
      await axios.delete(`/api/comments/${commentId}/`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      const index = comments.indexOf(comment)
      const newCommentArray = [...comments.splice(index, 1)]
      setComments([...comments])
      history.push(`/images/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/images/${id}/`, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      history.push('/images/')
    } catch (err) {
      // setError(true)
      console.log('delete image err', err)
    }
  }

  const addComment = () => {
    setAddAComment(!addAComment)
  }
  return (
    
    <section key={id} className="is-flex is-justify-content-center is-flex-direction-column" id="image-show-page">
      {userIsOwner(image.owner) &&
      <>
        <div className="is-flex" id="delete-image-btn">
          <Button className="delete-image-btn" variant="outline-dark" onClick={handleDelete}><p>Delete</p></Button>
          <Button className="edit-image-btn" variant="outline-dark" href={`/images/${id}/edit/`}><p>Edit</p></Button>
        </div>
      </>
    
      }
      <Card style={{ width: '19rem' }} id="image-card">
        <Card.Img src={image.image} alt={image.caption} />
        <Card.Title className="card-title">{owner.username}</Card.Title>
        <Card.Text className="image-footer">{image.caption}<i className="bi bi-chat-square-dots" onClick={addComment} id="comment-icons"></i>
          
        </Card.Text>
        {addAComment && <AddAndDeleteComment ImageId={image.id} setAddAComment={setAddAComment} setComments={setComments}/> } 
        <hr/>
        {comments &&
        comments.map((comment) => {
          if (userIsOwner(comment.owners)) {
            return (
              <>
                <div className="is-flex is-justify-content-space-between">
                  <Card.Text className="image-footer">{comment.text}</Card.Text>
                  <Button className="delete-comment-btn" variant="outline-dark" onClick={() => deleteComment(comment.id, comment)}><p>Delete</p></Button>
                </div>
                <hr/>
              </>
            )
          }
          
          return (
            <>
              <Card.Title key={comment._id} className="image-footer">{comment.id}</Card.Title>
              <div className="is-flex is-justify-content-space-between">
                <Card.Text className="image-footer">{comment.text}</Card.Text>
              
              </div>
            </>
          )
        })}
        
        
      </Card>
    </section>
  )
}

export default ImageShow