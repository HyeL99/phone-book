import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {

  return (
    <Row>
      <Col sm={3}>
      <img width="100%" src="https://cdn-icons-png.flaticon.com/512/5663/5663621.png"/>
      </Col>
      <Col sm={9}>
      <div>{item.name}</div>
      <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
