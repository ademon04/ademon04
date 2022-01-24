import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const App_ID = "33c56fee";
    const App_key = "6c44986c7b77a9b2d30ebdd67cf74be4";
  
  useEffect( () => {
    
   
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_key}`)
    const data =  await response.json();
    console.log(data);

  }

  return (
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text"/>
        <button className="search-buttom" type="submit">
            search
        </button>
      </form>
    </div>
  );
};
    
export default App;

