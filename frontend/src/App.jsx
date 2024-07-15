import React from "react";
import Main from "./components/Main";
import {Routes,Route} from "react-router-dom"
import Mealinfo from "./components/Mealinfo";

const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:mealid" element={<Mealinfo/>}/>
    </Routes>
    </>
  )
};

export default App;
