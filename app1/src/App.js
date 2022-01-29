import React, { useState, useEffect } from 'react';
import  Recipe from "./Recipe";
import styles from './app.module.css';

function App() {
    const App_ID = "33c56fee";
    const App_key = "6c44986c7b77a9b2d30ebdd67cf74be4";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
 
  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`)
    const data =  await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

    const updatesearch = e => {
      setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch({});
  }


  return (
    <div className={styles.App}>
      <form onSubmit={getSearch} className={styles.form}> 
        <input className={styles.bar} type="text" value={search} onChange={updatesearch}/>
        <button className={styles.searchButton} type="submit">
            search
        </button> 
      </form>
      <div className={styles.recipes}>
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;

