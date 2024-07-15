import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({detail}) => {
  return (
    <>
    <div className='meals'>
        {
            !detail ? "Data Not found" : detail.map((item,i) => {
                return(
                    <div key={{i}} className='mealImg'>
                        <img src={item.strMealThumb}/>
                        <p>{item.strMeal}</p>
                    <Link to={`${item.idMeal}`}><button>receipe</button></Link>
                    </div>
                )
            })}
    </div>
    </>
  )
}

export default Meal