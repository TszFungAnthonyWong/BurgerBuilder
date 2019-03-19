import React from 'react';
import './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

    let ingredient = Object.keys(props.ingredient).map((igKey)=>{
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
            return <BurgerIngredient type={igKey} key={igKey+i}/>
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(ingredient.length ===0){
        ingredient = <p>Please start add ingredient!</p>;
    }

    return (
        <div className='Burger'>
            <BurgerIngredient type='BreadTop'/>
            {ingredient}
            <BurgerIngredient type='BreadBottom'/>
        </div>
    );
}
 
export default burger