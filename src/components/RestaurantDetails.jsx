import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {

  //const [restaurants, setRestaurants] = useState([])
  const restaurants = useSelector((state) => state.restaurants.data);

  const {id} = useParams();

  // useEffect(()=>{

  //   fetch('/restaurants.json')
  //  .then((res) => res.json())
  //  .then((data) =>setRestaurants(data.restaurants))
   

// }, []);

 const restaurant = restaurants.find((rest) => rest.id == id);


  return (
    
  <Container>
    {restaurant && (
    <Row>
    
      <Col md={8} className='py-3'>
      <Card>
      <Card.Img variant="top" style={{height: 500 , width:855 }} src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>{restaurant.address}</Card.Text>  
      </Card.Body>
      </Card>
      </Col>
        <Col md={4} className='py-3'>
        <h4>Cuisine Type: {restaurant.cuisine_type}</h4>
        <h5>Operating Hours:</h5>
        <ListGroup variant="flush">
           
        <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
        </ListGroup>
          
      </Col>
         
    </Row>

    )}
    
    
  </Container>
   
  )}

export default RestaurantDetails