import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealId} = useParams({});
    const [detail,setDetail] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res=>res.json())
        .then(data=>setDetail(data.meals[0]))
    },[])

    console.log(detail)

    return (
        <div>
            {
              detail.strMeal  
            }
        </div>
    );
};

export default MealDetail;