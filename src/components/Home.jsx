import React, {useEffect, useState} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Restaurants from './Restaurants'
import { getRestaurants } from '../redux/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'


 



   //const [restaurant, setRestaurant] = useState({

   
function Home() {

   const dispatch = useDispatch();

   const [menu,setMenu] = useState(10);
   //const [restaurants, setRestaurants] = useState([])
   const restaurants = useSelector((state) => state.restaurants.data);
   //const restaurants =[];

   useEffect(()=>{

       fetch('./restaurants.json')
      .then((res) => res.json())
      .then((data) => dispatch(getRestaurants(data.restaurants)));
      

   }, []);
  
//   const restaurant ={
//    name:"Traffels",
//    location: "Bangalore",
//    photograph:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
//    description: "One of the best restaurants in town "
//    }
   
   // const handleMenuIncrement = ()=>{
   //    setMenu(menu + 1);
   // }

   // const handleMenuDecrement =()=>{
   //    setMenu(menu - 1);
   // }

  return (
    <Container>
        <Row>

           {restaurants && (
            restaurants.map((restaurant, index) => (
               <Col className='py-3' md={3} key={index}>
               <Restaurants restaurant = {restaurant}  />
               </Col>
            ))
             
           )}

         {/* <Col className='py-3' md={3}>
            <Restaurants details = {restaurant} id ={5} />
            </Col> */}
            {/* <Col className='py-3' md={3}>
            <Card>
               <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/9/18011679/d9ed9806aad25962d43ce1fccd857a41.jpg" />
                  <Card.Body>
                     <Card.Title>The Creek</Card.Title>
                        <Card.Text>
                        Fashionable restaurant featuring floor-to-ceiling windows & international dishes.
                        </Card.Text>
                        <Button class="btn btn-success">More Details</Button>
                        <br/>
                        <Button class="btn btn-success" className='ms-1 mt-2' onClick={handleMenuIncrement}>MENU + </Button> {menu}
                        <Button class="btn btn-success" className='ms-1 mt-2' onClick={handleMenuDecrement}>MENU - </Button> 
                    </Card.Body>
            </Card>
            </Col> */}


            <Col className='py-3' md={3}>
            <Card>
               <Card.Img variant="top" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"/>
                  <Card.Body>
                     <Card.Title>ASEAN</Card.Title>
                        <Card.Text>
                        Huge windows look over the city at this upscale, stone-accented Asian restaurant & lounge.
                        </Card.Text>
                        <Button class="btn btn-success">More Details</Button>
                    </Card.Body>
            </Card>
            </Col>
            <Col className='py-3' md={3}>
            <Card>
               <Card.Img variant="top" src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=" />
                  <Card.Body>
                     <Card.Title>The Brasserie</Card.Title>
                        <Card.Text>
                        Contemporary eatery serving global cuisine & cocktails in a rustic, industrial-style setting.
                        </Card.Text>
                        <Button class="btn btn-success">More Details</Button>
                    </Card.Body>
            </Card>
            </Col> 
        </Row>
        
        

    </Container>
  )
}

export default Home