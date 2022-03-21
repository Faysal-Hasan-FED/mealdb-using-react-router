import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Meal = (props) => {
    const {strMeal , strMealThumb} = props.meal;
    return (

    <Col>
      <Card>
        <Card.Img className='w-50 mx-auto rounded' variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className='text-center'>{strMeal}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <div className='text-center'>
          <Button variant='outline-dark'>See Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Col> 
       
    );
};

export default Meal;