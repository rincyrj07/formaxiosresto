import axios from 'axios';
import React, { useState } from 'react'
import { Col, Container, Row , Form, Button } from 'react-bootstrap'

//import { Form } from 'react-router-dom'

function AddRestaurant() {

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantNeighbourhood, setRestaurantNeighbourhood] = useState('');

    const [validated, setValidated] = useState(false);
    
    const handleRestaurantName = (e)=>{
        setRestaurantName(e.target.value);
    }
     
    const handleRestaurantAddress = (e)=>{
      setRestaurantAddress(e.target.value);
  }

    const handleRestaurantNeighbourhood = (e)=>{
        setRestaurantNeighbourhood(e.target.value);
    }

     console.log("restaurantName--------->", restaurantName);
     console.log("restaurantAddress--------->", restaurantAddress);
     console.log("restaurantNeighbourhood--------->", restaurantNeighbourhood);
       

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      const restaurantDetails ={
        restaurantName,
        restaurantAddress,
        restaurantNeighbourhood,
      }
      //axios.post('',restaurantDetails)
    };

  
    return (
   <Container>
    <Row>
        <Col className="mt-3">
        <h5>Add Restaurant Details</h5>
        </Col>
    </Row>
    <Row>
        <Col className="mt-3">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Restaurant Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant name"  required onKeyUp={handleRestaurantName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Restautant Address:</Form.Label>
        <Form.Control type="text" placeholder="Enter restaurant address" required onKeyUp={handleRestaurantAddress}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Neighbourhood:</Form.Label>
        <Form.Control type="text" placeholder="Enter neighbourhood" required onKeyUp={handleRestaurantNeighbourhood} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Cuisine Type:</Form.Label>
          <Form.Select defaultValue="Choose..." required>
            <option>Select cuisine type</option>
            <option>Asian</option>
            <option>American</option>
            <option>Italian</option>
            <option>Mexican</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Restaurant photograph</Form.Label>
        <Form.Control type="file" />
        </Form.Group>

        <Button type="submit" className="mb-3  border-0">Add Restaurant</Button>
    </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default AddRestaurant