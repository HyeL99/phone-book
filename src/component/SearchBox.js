import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  let [searchName, setSearchName] = useState("")
  let dispatch = useDispatch();

  const searchItem = (event)=>{
    event.preventDefault();
    dispatch({type:"SEARCH_ITEM", payload:{searchName}});
}

  return (
    <Form onSubmit={searchItem}>
      <Row>
        <Col sm={10}>
        <Form.Control type="text" placeholder="Search Name" onChange={(event)=>setSearchName(event.target.value)} />
        </Col>
        <Col sm={2}>
          <Button variant="primary" type='submit'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
