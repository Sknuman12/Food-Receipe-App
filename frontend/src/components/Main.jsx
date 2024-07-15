import React, { useState } from 'react'
import Meal from './Meal'

const Main = () => {
    const[data, setData] = useState()
    const [search,setSearch] = useState("")
    const [msg,setMsg] = useState("")
    const handleInput = (e) => {
        setSearch(e.target.value)
    }

   const myFun =async () => {
    if(search == ""){
        setMsg("please enter something")
    }else{
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const Data = await get.json()
    setData(Data.meals)
    setMsg("")
   }
    }
  return (
    <>
    <h1 className='head'>Food Recipe App</h1>
    <div className='container'>
        <div className='searchBar'>
            <input type="text" placeholder='Enter-Dishe' onChange={handleInput}/>
            <button onClick={myFun}>search</button>
        </div>
        <h3>{msg}</h3>
        <div>
            <Meal detail={data}/>
        </div>
    </div>
    </>
  )
}

export default Main