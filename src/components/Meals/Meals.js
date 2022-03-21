import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=>res.json())
        .then(data=>{
            setMeals(data.meals);
            setMatchedMeal(data.meals);
        })
    },[]);

    const [matchedMeal,setMatchedMeal] = useState([]);

    const handleSearch = (event) =>{
        const searchedText = event.target.value;
        const matchedText = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchedText.toLowerCase()));
        console.log(matchedText);
        setMatchedMeal(matchedText);
    }
    return (
        <Container className='mt-3'>
            <div className='text-center'>
                <input onChange={handleSearch} className='w-75' type="text" placeholder='Search your food here' />
            </div>
            <Row xs={1} md={2} className="g-4 mt-3">
            {
                matchedMeal.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
            }
            </Row>
        </Container>
    );
};

export default Meals;