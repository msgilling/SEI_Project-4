
import React from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

const uploadUrl = 'https://api.cloudinary.com/v1_1/dhzuvbpmd/image/upload'
const uploadPreset = 'fa1qsijm'

export const ImageUploadField = ({ handleImageUrl, value }) => {
  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    // console.log('data ->', data)
    const res = await axios.post(uploadUrl, data)
    // console.log('response ->', res)
    handleImageUrl(res.data.url)
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="formProfileImage">
        {value ?
          <div>
            <img src={value} alt="profileImagePreview" />
          </div>
          :
          <Form.Control
            className="input"
            type="file"
            name="image"
            onChange={handleUpload}
          />
        }
      </Form.Group>
    </>

  )
}

