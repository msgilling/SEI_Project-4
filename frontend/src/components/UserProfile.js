import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const UserProfile = () => {
  const [userProfiles, setUserProfiles] = useState([])
  const [userUploads, setUserUploads] = useState([])
  const { id } = useParams()
  // const { imageId } = useParams()
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([])
  

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(`/api/auth/${id}`)
    
      setUserProfiles(data)
      setUserUploads(data.Uploads)
      console.log('data.uploads', data.Uploads)
    }
    getUserInfo()
  }, [id])


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/images/${id}/`) 
      console.log('response', data)
      setImages(data)
    }
    getData()
  }, [id])
 

  return (

    <Container className="userprofile-show">
      <Row>
        <Col>
          <Image src={userProfiles.profile_image} roundedCircle width="180" className="profile-image" />
        </Col>
        <Col className="user-bio">
          <Row>
            <h1 className="username-title">{userProfiles.username}</h1>
          </Row>
          <Row>
            <h4 className="pronouns-text">{userProfiles.pronouns}</h4>
          </Row>
          <Row>
            <h3 className="about-me-text">{userProfiles.about_me}</h3>
          </Row>
        </Col>
      </Row>
      <Row className="is-flex is-justify-content-center" id="userprofile-card-show">
        {userUploads.reverse().map((userUpload) => {
          console.log('userUpload', userUpload)
          return (
            <div key={id} className="column is-flex is-justify-content-center">
              <Card style={{ width: '12rem' }} id="image-card-profile" className="columns-is-one-quarter">
                <Link to={`/images/${userUpload.id}`}>
                  
                  <Card.Img src={userUpload.image} alt={userUpload.caption} id="userprofile-card-img" />
                

                </Link>
              </Card>
            </div>
          )
        })}

      </Row>
    </Container>
  )
}

export default UserProfile