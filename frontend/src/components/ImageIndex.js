import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCard from './ImageCard'
// import { Container, Row, Col, Card } from 'react-bootstrap'

const ImageIndex = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/images/') 
      console.log('response', data)
      setImages(data)
    }
    getData()
  }, [])
  console.log('images on state', images)
  

  return (
    <>
      <section className="section" id="index-section">
        <div className="container">

          <div className="columns is-flex is-flex-direction-column is-align-items-center">
            {images.reverse().map(image => {
              return (
                <ImageCard key={image._id} {...image}/>
              )
            })}

          </div>

        </div>

      </section>
    
    </>

  )
}

export default ImageIndex