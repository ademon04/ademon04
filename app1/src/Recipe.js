import React from 'react'; 
import style from './recipe.module.css';
import Title from './Title';
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
          <Title text={title}/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;