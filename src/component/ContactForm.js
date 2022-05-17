import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0)
    const dispatch = useDispatch();
    
    const addContact = (event)=>{
        event.preventDefault();
        console.log("click", name, phoneNumber)
        dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}});
        setName("");
        setPhoneNumber("");
    }

  return (
    <Form onSubmit={(event)=>addContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={(event)=>setPhoneNumber(event.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default ContactForm;
