import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ImageCard = ({ id, image, caption }) => {
  console.log('_ID ->', id)

  

  return (


    <div key={id}>
      <Card style={{ width: '19rem' }} id="image-card">
        <Link to={`/images/${id}`}>

          <Card.Img src={image} alt={caption} />
          <Link to={`/api/userprofile/${id}`}>
            <Card.Title className="card-title">{}</Card.Title>
          </Link>
          <Card.Text className="image-footer">{caption}
            {/* <Link to={`/images/${id}/comments`}><i className="bi bi-chat-square-dots" id="comment-icons"></i></Link> */}
            {/* <i className="bi bi-heart" id="heart-icons"></i> */}
          </Card.Text>

        </Link>
      </Card>
    </div>


  )
}

export default ImageCard