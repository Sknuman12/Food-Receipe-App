import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams()
    const [info,setInfo] = useState()
    console.log(mealid);

    const getinfo =async ()=>{
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsondata =await get.json()
       setInfo(jsondata.meals[0]);
    }
    if(info != ''){
        getinfo()
    }
  return (
   <>
        {
        !info ? "Data Not Found" : 
        <div className='mealInfo'>
            <div className='info'>
            <img src={info.strMealThumb}/>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction</h3>
            <p>{info.strInstructions}</p>
            </div>
        </div>  
        }
    </> 
  )
}

export default Mealinfo